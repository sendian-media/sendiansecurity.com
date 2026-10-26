import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://sendiansecurity.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !['/contact/thanks', '/privacy', '/terms'].includes(new URL(page).pathname),
    }),
  ],
});
