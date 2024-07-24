import type { Icons } from "~/components/icons";

// TODO: Pick a better name for "type"
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
