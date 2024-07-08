import { Providers } from "~/providers";

import "~/styles/global.css";

import type { Metadata } from "next";
import React from "react";
import { Flex, Separator } from "@radix-ui/themes";

import { BackgroundImage } from "~/components/background-image";
import { FloatingScrollToTopButton } from "~/components/floating-scroll-to-top-button";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { PageWrapper } from "~/components/page-wrapper";
import { ScreenSizeIndicator } from "~/components/screen-size-indicator";
import { siteConfig } from "~/config/site";
import { env, IS_PRODUCTION } from "~/env";
import { fonts } from "~/fonts";
import { ogImageApi } from "~/lib/api";
import { cn } from "~/lib/classnames";
import { allRoutes } from "~/lib/routes";
import { getBaseUrl } from "~/lib/url";

const ogImageUrl: string = ogImageApi({});

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
    images: [
      {
        url: ogImageUrl,
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children = undefined,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(env.WWW_USE_CUSTOM_FONTS && fonts)}>
        <div id="root">
          <Providers>
            <Layout.Background style={backgroundStyle}>
              <Layout.Root>
                <Layout.Header>
                  <Header
                    sticky
                    ghost
                    autoHide
                    viewportScrollFactorThreshold={2}
                    scrollDistanceThreshold={100}
                    backdropExtended
                    navLinks={allRoutes.navLinks.pages.splice(0, 2)}
                    commandMenuRoutes={[
                      allRoutes.navLinks,
                      allRoutes.blog,
                      allRoutes.projects,
                      allRoutes.personal,
                      allRoutes.social,
                      allRoutes.legal,
                    ]}
                  />
                </Layout.Header>

                <Layout.BackgroundImage>
                  <BackgroundImage style={backgroundImageStyle} id="1" />
                </Layout.BackgroundImage>

                <Layout.Main>
                  <Layout.Content>{children}</Layout.Content>
                </Layout.Main>
                <Layout.Footer>
                  <Flex align="center" justify="center">
                    <Separator size="3" />
                  </Flex>
                  <PageWrapper>
                    <Footer pages={allRoutes.social.pages.slice(0, 5)} />
                  </PageWrapper>
                </Layout.Footer>
              </Layout.Root>
            </Layout.Background>

            <FloatingScrollToTopButton scrollTopThreshold={800} smoothScroll />
            {!IS_PRODUCTION && <ScreenSizeIndicator />}
          </Providers>
        </div>
      </body>
    </html>
  );
}

const backgroundStyle: React.CSSProperties = {
  backgroundRepeat: "no-repeat",
  backgroundImage: `
              radial-gradient(circle 800px at 700px 200px, var(--purple-2), transparent),
              radial-gradient(circle 600px at calc(100% - 300px) 300px, var(--blue-3), transparent),
              radial-gradient(circle 800px at right center, var(--sky-3), transparent),
              radial-gradient(circle 800px at right bottom, var(--sky-1), transparent),
              radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), var(--pink-3), var(--pink-1), transparent)
            `,
  opacity: "0.005",
} as React.CSSProperties;

const backgroundImageStyle = {
  "--color-background-image-base": "var(--color-background)",
  "--color-background-image-accent-1": "var(--indigo-a7)",
  "--color-background-image-accent-2": "var(--violet-6)",
  "--color-background-image-accent-3": "var(--purple-9)",
  "--color-background-image-accent-4": "var(--blue-5)",
  "--color-background-image-accent-5": "var(--slate-1)",
  "--color-background-image-accent-6": "var(--crimson-a5)",
  "--color-background-image-accent-7": "var(--indigo-5)",
  transformOrigin: "center center",
  transform: "scaleX(-1) rotate(160deg)",
  opacity: "0.005",
} as React.CSSProperties;
