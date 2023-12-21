import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og-edge/*", "/api/og-nodejs/*"],
      disallow: "/private/",
    },
  };
}
