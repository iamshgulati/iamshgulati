import type { Frontmatter } from "~/types/frontmatter";
import { getParams } from "./url";

export const ogImageApi = ({
  title,
  publishedAt = undefined,
}: Pick<Frontmatter, "title" | "publishedAt">) =>
  encodeURI(
    `/api/og-nodejs?${getParams({
      title,
      publishedAt,
    })}`,
  );
