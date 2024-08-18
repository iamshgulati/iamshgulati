import type { MDXModule } from "mdx/types";
import glob from "tiny-glob";

import type { Frontmatter } from "~/types/frontmatter";

const ROOT_DIR = process.cwd();

export const frontmatters = async ({
	contentDir = "",
}: {
	contentDir?: string;
}): Promise<Frontmatter[]> => {
	const mdxFilePathPattern = `${ROOT_DIR}/public/${contentDir}/**/*.mdx`;
	const mdxFilePaths = await glob(mdxFilePathPattern);

	const frontmatters: Frontmatter[] = await Promise.all(
		mdxFilePaths.map(async (mdxFilePath) => {
			const slug = mdxFilePath
				.replace("public", "")
				.replace("index.mdx", "")
				.split("/")
				.filter((e) => e !== "")
				.join("/");

			const { metadata } = (await import(`../public/${slug}/index.mdx`)) as MDXModule;

			return {
				...(metadata as Frontmatter),
				slug,
			} as Frontmatter;
		}),
	);

	const publishedFrontmatters = frontmatters.filter(
		(frontmatter: Frontmatter) => !frontmatter.slug.split("/").some((s) => s.startsWith("_")),
	);

	const sortedFrontmatters = publishedFrontmatters.sort(
		(a: Frontmatter, b: Frontmatter) =>
			Number(new Date(b.publishedAt ?? new Date())) - Number(new Date(a.publishedAt ?? new Date())),
	);

	return sortedFrontmatters;
};
