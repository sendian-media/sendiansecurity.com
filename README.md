# Sendian Security

Static Astro website for Sendian Security.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Configuration

Copy `.env.example` to `.env`. `SANITY_*` variables are required only when CMS-powered routes are enabled. `PUBLIC_CONTACT_FORM_ACTION` is the hosted form provider's public POST endpoint.

## Local website recreation skill

This project includes an explicit, local-only Astro website-recreation skill adapted from [`JCodesMore/ai-website-cloner-template`](https://github.com/JCodesMore/ai-website-cloner-template) (MIT).

Before invoking it, provide authorization to reproduce the target, the requested source URL or reference artifacts, intended routes, and allowed write scope. Run it explicitly in Pi:

```text
/skill:clone-website <authorized source URL, routes, and scope>
```

Recreated pages belong under `src/pages/recreated/<site>/`, source-specific components under `src/components/sites/<site>/`, permitted assets under `public/sites/<site>/`, and research/comparison evidence under `docs/`.

Local-only previews must use loopback:

```sh
SITE_URL=http://127.0.0.1:4321 npm run preview -- --host 127.0.0.1 --port 4321
```

The project MCP entries for Aidesigner are disabled so this workflow does not connect to that remote service. Existing pages still load Google Fonts; a fully offline runtime requires separately replacing those fonts with licensed local files.

## Deployment

Deploy the generated `dist/` directory to a static host. Configure a Sanity publish webhook to trigger the host's protected deploy hook after the CMS schema and content model are live.
