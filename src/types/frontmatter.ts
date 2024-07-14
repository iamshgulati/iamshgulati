import type { Icons } from "~/components/icons";

export type MetadataProps = {
  title: string;
  description?: string;
  image?: string;
};

export type Frontmatter = {
  slug: string;
  title: string;
  description?: string;
  icon?: keyof typeof Icons;
  disabled?: boolean;
  type?: "page" | "entry";
} & {
  slugAsParams?: string;
  publishedAt?: string;
  image?: string;
  by?: "shubham";
  category?: string;
  tags?: string[];
} & {
  sourceCodeLink?: string;
  projectLink?: string;
};
