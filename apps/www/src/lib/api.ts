import { getBaseUrl, getParams } from "./url";

export const ogImageApi = ({
  title = undefined,
  publishedAt = undefined,
}: {
  title?: string;
  publishedAt?: string;
}) =>
  `${getBaseUrl()}/api/og?${getParams({
    title: title,
    publishedAt: publishedAt,
  })}`;
