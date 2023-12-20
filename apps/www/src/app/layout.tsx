import { ScreenSizeIndicator } from "~/components/screen-size-indicator";
import { Providers } from "~/providers";

import "~/styles/globals.css";

import React from "react";
import type { Metadata } from "next";

import { siteConfig } from "~/config/site";
import { env, isProduction } from "~/env.mjs";
import { fonts } from "~/fonts";
import { ogImageApi } from "~/lib/api";
import { cn } from "~/lib/classnames";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.title}` },
  description: siteConfig.description,
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: ogImageApi({
          title: "Hello! I'm Shubham Gulati.",
        }),
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      ogImageApi({
        title: "Hello! I'm Shubham Gulati.",
      }),
    ],
  },
};

export default function RootLayout({
  children = undefined,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(env.USE_CUSTOM_FONTS && fonts)}>
        <div id="root">
          <Providers>
            {children}
            {!isProduction && <ScreenSizeIndicator />}
          </Providers>
        </div>
      </body>
    </html>
  );
}
