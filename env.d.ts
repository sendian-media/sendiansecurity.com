/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly SANITY_PROJECT_ID?: string;
  readonly SANITY_DATASET?: string;
  readonly SANITY_API_READ_TOKEN?: string;
  readonly PUBLIC_CONTACT_FORM_ACTION?: string;
  readonly MAILJET_API_KEY?: string;
  readonly MAILJET_API_SECRET?: string;
  readonly MAILJET_FROM_EMAIL?: string;
  readonly MAILJET_FROM_NAME?: string;
  readonly MAILJET_NOTIFICATION_TO?: string;
  readonly MAILJET_NOTIFICATION_BCC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
