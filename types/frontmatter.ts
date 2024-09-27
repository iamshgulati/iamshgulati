import type { Icons } from "~/components/icons";

export type Frontmatter = {
	slug: string;
	title: string;
	description?: string;
	publishedAt?: string;
	category?: string;
	tags?: string[];
	image?: string;
	type?: "website" | "article";
	pinned?: boolean;
	disabled?: boolean;
	icon?: keyof typeof Icons;
	sourceCodeLink?: string;
	projectLink?: string;
};
