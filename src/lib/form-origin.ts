const originOf = (url: string | undefined): string | undefined => {
  if (!url) return undefined;

  try {
    return new URL(url).origin;
  } catch {
    return undefined;
  }
};

export const isAllowedFormOrigin = (origin: string | null, requestUrl: string, siteUrl?: string): boolean => {
  if (!origin) return true;

  return origin === originOf(requestUrl) || origin === originOf(siteUrl);
};
