import { env } from "~/env";

export const getBaseUrl = (): string => env.APP_URL ?? `http://localhost:3000`;

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
