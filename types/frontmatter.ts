import type { Icons } from "~/components/icons";

// TODO: Pick a better name for "type"
export type Frontmatter = {
  slug: string;
  slugAsParams?: string;
} & {
  title: string;
  description?: string;
  publishedAt?: string;
  category?: string;
  tags?: string[];
  image?: string;
  type?: "page" | "entry";
  disabled?: boolean;
  icon?: keyof typeof Icons;
} & {
  sourceCodeLink?: string;
  projectLink?: string;
};
