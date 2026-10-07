/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly SANITY_PROJECT_ID?: string;
  readonly SANITY_DATASET?: string;
  readonly SANITY_API_READ_TOKEN?: string;
  readonly PUBLIC_CONTACT_FORM_ACTION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
