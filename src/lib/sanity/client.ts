import { createClient } from '@sanity/client';

export function getSanityClient() {
  const { SANITY_PROJECT_ID: projectId, SANITY_DATASET: dataset, SANITY_API_READ_TOKEN: token } = import.meta.env;

  if (!projectId || !dataset || !token) {
    throw new Error('SANITY_PROJECT_ID, SANITY_DATASET, and SANITY_API_READ_TOKEN must be set before CMS-powered pages can build.');
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: '2025-01-01',
    token,
    perspective: 'published',
    useCdn: false,
  });
}
