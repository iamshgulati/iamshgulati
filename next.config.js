/* eslint-disable no-restricted-properties */
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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
  experimental: {
    mdxRs: true,
  },
  //
  modularizeImports: {
    "@radix-ui/themes": {
      transform: "@radix-ui/themes/dist/esm/components/{{kebabCase member}}.js",
      skipDefaultConversion: true,
      preventFullImport: true,
    },
  },
};

export default withBundleAnalyzer(nextConfig);
