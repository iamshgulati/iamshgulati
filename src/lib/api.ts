import { getBaseUrl, getParams } from "./url";

interface ogImageApiProps {
  title?: string;
  publishedAt?: string;
}

export const ogImageApi = ({
  title = undefined,
  publishedAt = undefined,
}: ogImageApiProps) =>
  `${getBaseUrl()}/api/og?${getParams({
    title: title,
    publishedAt: publishedAt,
  })}`;
