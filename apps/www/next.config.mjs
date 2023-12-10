/** Importing env files here to validate on build */
import "./src/env.mjs";

import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import { env } from "./src/env.mjs";

/**
 * Next.js redirects
 */
// eslint-disable-next-line @typescript-eslint/require-await
const nextRedirects = async () => [
  {
    source: "/professional",
    destination: "/projects",
    permanent: false,
  },
  {
    source: "/personal",
    destination: "/blog",
    permanent: false,
  },
  {
    source: "/get-resume",
    destination: "/files/ShubhamGulati_Resume.pdf",
    permanent: true,
  },
  {
    source: "/github",
    destination: "https://github.com/iamshgulati",
    permanent: true,
  },
  {
    source: "/linkedin",
    destination: "https://www.linkedin.com/in/iamshgulati/",
    permanent: true,
  },
  {
    source: "/twitter",
    destination: "https://twitter.com/iamshgulati",
    permanent: true,
  },
  {
    source: "/threads",
    destination: "https://www.threads.net/@iamshgulati",
    permanent: true,
  },
  {
    source: "/mastodon",
    destination: "https://mastodon.social/@iamshgulati",
    permanent: true,
  },
  {
    source: "/bluesky",
    destination: "https://bsky.app/about/iamshgulati.bsky.social",
    permanent: true,
  },
];

/**
 * Next.js configuration
 */
/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  redirects: nextRedirects,
  experimental: {
    webpackBuildWorker: true,
    // mdxRs: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

/**
 * Remark MDX Frontmatter configuration
 */
/** @type {import("remark-mdx-frontmatter").RemarkMdxFrontmatterOptions} */
const remarkMdxFrontmatterOptions = {
  name: "metadata",
};

/**
 * Rehype Pretty Code configuration
 */
/** @type {import("rehype-pretty-code").Options} */
const rehypePrettyCodeOptions = {
  theme: { dark: "github-dark", light: "github-light" },
  keepBackground: false,
};

/**
 * Next.js MDX configuration
 */
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

/**
 * Bundle analyzer configuration
 */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: env.ANALYZE === "true",
});

export default withBundleAnalyzer(withMDX(nextConfig));
