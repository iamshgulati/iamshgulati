import { fileURLToPath } from "url";
import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";
import createJiti from "jiti";

createJiti(fileURLToPath(import.meta.url))("./src/env");

/**
 * Bundle analyzer configuration
 */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * Next.js MDX configuration
 */
/** @type {import('@next/mdx').NextMDXOptions} */
const mdxConfig = {
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
};
const withMDX = mdx(mdxConfig);

/**
 * Next.js configuration
 * redirect and headers do not work with static site export
 * redirects: nextRedirects,
 * headers: nextHeaders,
 */
/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  basePath: "",
  output: "export",
};

export default withBundleAnalyzer(withMDX(nextConfig));

////////////////////////////////////////////////////////////////////////////////////

/**
 * Next.js redirects
 */
// eslint-disable-next-line @typescript-eslint/require-await
const _nextRedirects = async () => [
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
    source: "/bluesky",
    destination: "https://bsky.app/about/iamshgulati.bsky.social",
    permanent: true,
  },
  {
    source: "/mastodon",
    destination: "https://mastodon.social/@iamshgulati",
    permanent: true,
  },
];

/**
 * Next.js headers
 */
// eslint-disable-next-line @typescript-eslint/require-await
const _nextHeaders = async () => {
  if (process.env.NODE_ENV !== "production") {
    return [];
  }
  return new Promise(() => [
    {
      source: "/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000",
        },
      ],
    },
  ]);
};
