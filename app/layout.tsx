import { Providers } from "~/providers";

import "~/styles/global.css";

import type { Metadata } from "next";
import React from "react";
import { Container, Flex, Section, Separator } from "@radix-ui/themes";

import { FloatingScrollToTopButton } from "~/components/floating-scroll-to-top-button";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { ScreenSizeIndicator } from "~/components/screen-size-indicator";
import { siteConfig } from "~/config/site";
import { env } from "~/env";
import { ogImageApi } from "~/lib/api";
import { dynamicRoutes, staticRoutes } from "~/lib/routes";
import { getBaseUrl } from "~/lib/url";
import { fonts } from "~/fonts";

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
      <body
      className={fonts}
      >
        <Providers>
          <Layout.Root>
            <Layout.Header>
              <Header
                sticky
                ghost
                // autoHide
                viewportScrollFactorThreshold={2}
                scrollDistanceThreshold={100}
                backdropExtended
                mainNavLinks={staticRoutes.mainNavLinks.pages?.slice(0, 3)}
                commandMenuRoutes={[
                  staticRoutes.mainNavLinks,
                  dynamicRoutes.blog,
                  dynamicRoutes.projects,
                  staticRoutes.social,
                  staticRoutes.legal,
                ]}
              />
            </Layout.Header>
            <Layout.Main>{children}</Layout.Main>
            <Layout.Footer>
              <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
                <Flex align="center" justify="center">
                  <Separator size={{ initial: "2", md: "3" }} />
                </Flex>
                <Section size={{ initial: "2", md: "4" }} pb="0">
                  <Footer
                    pages={staticRoutes.social.pages?.slice(0, 4) ?? []}
                  />
                </Section>
              </Container>
            </Layout.Footer>
          </Layout.Root>
          <FloatingScrollToTopButton scrollTopThreshold={800} smoothScroll />
          {!env.IS_PRODUCTION && <ScreenSizeIndicator />}
        </Providers>
      </body>
    </html>
  );
}
