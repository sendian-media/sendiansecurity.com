// Build-time analytics config per docs/SOP_CLARITY_GA_ANALYTICS.md (Sendiangroup.com repo).
// PUBLIC_* env vars can override the production defaults (e.g. a separate staging project/stream);
// on any other host the consent component renders nothing, so local previews never track.
export const GA_MEASUREMENT_ID: string = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || 'G-B0B50951T8';
export const CLARITY_PROJECT_ID: string = import.meta.env.PUBLIC_CLARITY_PROJECT_ID || 'z4pi6izqpe';

const ALLOWED_HOSTS = new Set(['sendiansecurity.com', 'www.sendiansecurity.com']);

export function analyticsEnabled(hostname: string): boolean {
  return ALLOWED_HOSTS.has(hostname.toLowerCase());
}
