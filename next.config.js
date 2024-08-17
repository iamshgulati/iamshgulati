import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import("next").NextConfig} */
const nextConfig = {
	basePath: "",
	output: "export",
	//
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
	//
	reactStrictMode: true,
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	//
	modularizeImports: {
		"@radix-ui/themes": {
			transform: "@radix-ui/themes/dist/esm/components/{{kebabCase member}}.js",
			skipDefaultConversion: true,
			preventFullImport: true,
		},
	},
};

/** @type {import("remark-mdx-frontmatter").RemarkMdxFrontmatterOptions} */
const remarkMdxFrontmatterOptions = {
	name: "metadata",
};

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxConfig = {
	options: {
		remarkPlugins: [
			remarkGfm,
			remarkFrontmatter,
			[remarkMdxFrontmatter, remarkMdxFrontmatterOptions],
		],
		rehypePlugins: [],
	},
};
const withMDX = mdx(mdxConfig);

/** Bundle analyzer configuration */
const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withMDX(nextConfig));
