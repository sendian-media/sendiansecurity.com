import { getSanityClient } from './client';
import type { SiteSettings } from './types';

const siteSettingsQuery = `*[_type == "securitySiteSettings"][0]{
  "name": coalesce(name, "Sendian Security"),
  description,
  email,
  phone
}`;

export function getSiteSettings() {
  return getSanityClient().fetch<SiteSettings | null>(siteSettingsQuery);
}
