import type { Icons } from "~/components/icons";

// TODO: Pick a better name for "type"
export type Frontmatter = {
  slug: string;
  slugAsParams?: string;
} & {
  title: string;
  description?: string;
  type?: "page" | "entry";
  image?: string;
  publishedAt?: string;
  category?: string;
  tags?: string[];
  sourceCodeLink?: string;
  projectLink?: string;
} & {
  icon?: keyof typeof Icons;
  disabled?: boolean;
};
