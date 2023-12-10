import { env } from "~/env.mjs";

export const getBaseUrl = (): string =>
  env.VERCEL_URL ?? `http://localhost:${env.PORT}`;

export const absoluteUrl = (path: string): string => `${getBaseUrl()}${path}`;
