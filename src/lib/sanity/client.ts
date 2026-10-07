import { createClient } from '@sanity/client';

export function getSanityClient() {
  const { SANITY_PROJECT_ID: projectId, SANITY_DATASET: dataset, SANITY_API_READ_TOKEN: token } = import.meta.env;

  if (!projectId || !dataset) {
    throw new Error('SANITY_PROJECT_ID and SANITY_DATASET must be set before CMS-powered pages can build.');
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: '2025-01-01',
    perspective: 'published',
    useCdn: false,
    ...(token ? { token } : {}),
  });
}
