import { env } from "~/env.mjs";

export const getBaseUrl = (): string => {
  const baseUrl =
    env.APP_URL ?? env.VERCEL_URL ?? `http://localhost:${env.PORT}`;
  console.log(`baseUrl - ${baseUrl}`);
  return baseUrl;
};

export const getParams = (
  object: Record<string, string | string[] | undefined>,
) =>
  Object.entries(object)
    .filter((entry) => entry[1])
    .map(
      ([key, value]) =>
        `${key}=${Array.isArray(value) ? value.join(" ") : value}`,
    )
    .join("&");
