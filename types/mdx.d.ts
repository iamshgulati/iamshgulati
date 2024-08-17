declare module "*.md" {
	import type { MDXProps } from "mdx/types";
	import type { Frontmatter } from "./frontmatter";

	export default function MDXComponent(props: MDXProps): React.JSX.Element;
	export const metadata: Frontmatter;
}

declare module "*.mdx" {
	import type { MDXProps } from "mdx/types";
	import type { Frontmatter } from "./frontmatter";

	export default function MDXComponent(props: MDXProps): React.JSX.Element;
	export const metadata: Frontmatter;
}
