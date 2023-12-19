import type { Icons } from "~/components/icons";

export type PageLabel = "Soon" | "Preview" | "New";

export type Frontmatter = {
  slug: string;
  title: string;
  description?: string;
  icon?: keyof typeof Icons;
  label?: PageLabel;
  disabled?: boolean;
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
