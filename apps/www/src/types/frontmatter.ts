import type { FrontmatterData } from "~/lib/mdx-frontmatter";

export interface Frontmatter {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  publishedAt?: string;
  image?: string;
  by?: "shubham";
  category?: string;
  tags?: string[];
}

export type ProjectFrontmatter = Frontmatter & {
  summary?: string;
  link?: string;
  sourceCodeLink?: string;
};

export type FrontmatterKeyTypes = keyof typeof FrontmatterData;

export type FrontmatterTypes = (typeof FrontmatterData)[FrontmatterKeyTypes];
