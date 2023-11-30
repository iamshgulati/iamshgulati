/** Importing env files here to validate on build */
import "./src/env.mjs";

import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  /** transpilePackages: ["@shgulati/api", "@shgulati/auth", "@shgulati/db"], */
  transpilePackages: ["@radix-ui/themes"],
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  experimental: {
    webpackBuildWorker: true,
    // mdxRs: true,
  },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

/** @type {import("remark-mdx-frontmatter").RemarkMdxFrontmatterOptions} */
const remarkMdxFrontmatterOptions = {
  name: "metadata",
};

/** @type {import("rehype-pretty-code").Options} */
const rehypePrettyCodeOptions = {
  theme: { dark: "github-dark", light: "github-light" },
  keepBackground: false,
};

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxConfig = {
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [remarkMdxFrontmatter, remarkMdxFrontmatterOptions],
    ],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
};
const withMDX = mdx(mdxConfig);

/** Bundle analyzer configuration */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withMDX(nextConfig));
