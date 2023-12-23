import type { Frontmatter } from "~/types/frontmatter";
import { getBaseUrl, getParams } from "./url";

export const ogImageApi = ({
  title,
  publishedAt = undefined,
}: Pick<Frontmatter, "title" | "publishedAt">) =>
  `${getBaseUrl()}/api/og?${getParams({
    title: title,
    publishedAt: publishedAt,
  })}`;
