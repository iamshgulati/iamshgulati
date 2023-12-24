import { Providers } from "~/providers";

import "~/styles/global.css";

import React from "react";
import type { Metadata } from "next";

import { FloatingBackButton } from "~/components/floating-back-button";
import { FloatingScrollToTopButton } from "~/components/floating-scroll-to-top-button";
import { ScreenSizeIndicator } from "~/components/screen-size-indicator";
import { siteConfig } from "~/config/site";
import { env, isProduction } from "~/env.mjs";
import { fonts } from "~/fonts";
import { cn } from "~/lib/classnames";
import { getBaseUrl } from "~/lib/url";

// const ogImageUrl: string = ogImageApi({
//   title: "Hello! I'm Shubham Gulati.",
// });

export const metadata: Metadata = {
  metadataBase: new URL(`${getBaseUrl()}`),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.title}` },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: `${getBaseUrl()}`,
    siteName: siteConfig.title,
    locale: siteConfig.locale,
    type: "website",
    // images: [
    //   {
    //     url: ogImageUrl,
    //     width: 1920,
    //     height: 1080,
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    // images: [ogImageUrl],
  },
  manifest: "/site.webmanifest",
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
            <FloatingBackButton scrollTopThreshold={800} />
            <FloatingScrollToTopButton scrollTopThreshold={800} smoothScroll />
          </Providers>
        </div>
      </body>
    </html>
  );
}
