declare module "*.mdx" {
  import type { Frontmatter } from "./frontmatter";

  export const metadata: Frontmatter;
}
