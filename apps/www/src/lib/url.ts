export function getBaseUrl(): string {
  const APP_DOMAIN =
    process.env.APP_DOMAIN ??
    process.env.VERCEL_URL ??
    `localhost:${process.env.PORT ?? 3000}`;
  const APP_ENV = process.env.APP_ENV ?? process.env.VERCEL_ENV ?? "local";

  switch (APP_ENV) {
    case "production":
    case "preview":
    case "development":
      return `https://${APP_DOMAIN}`;
    default:
      return `http://${APP_DOMAIN}`;
  }
}

export function absoluteUrl(path: string): string {
  return `${getBaseUrl()}${path}`;
}
