import { env } from "~/env";

export const getBaseUrl = (): string =>
  env.WWW_APP_URL ?? `http://localhost:${env.PORT}`;

export const getParams = (
  object: Record<string, string | string[] | undefined>,
) =>
  Object.entries(object)
    .filter((entry) => entry[1])
    .map(
      ([key, value]) =>
        `${key}=${encodeURIComponent(
          value ? (Array.isArray(value) ? value.join(" ") : value) : "",
        )}`,
    )
    .join("&");
