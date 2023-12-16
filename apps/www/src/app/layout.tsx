import { ScreenSizeIndicator } from "~/components/screen-size-indicator";
import { Providers } from "~/providers";

import "~/styles/globals.css";

import React from "react";
import type { Metadata } from "next";
import { Container, Flex, Section, Separator } from "@radix-ui/themes";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { siteConfig } from "~/config/site";
import { env, isProduction } from "~/env.mjs";
import { fonts } from "~/fonts";
import { allRoutes } from "~/lib/routes";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
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
            <Layout.Background style={backgroundImageStyle}>
              <Layout.Root>
                <Layout.Header>
                  <Header
                    sticky
                    ghost
                    autoHide
                    scrollHeightFactor={1.25}
                    scrollDelay={22}
                    backdropExtended
                    productLinkRoute={allRoutes.productLinks}
                    commandMenuRoutes={[
                      allRoutes.productLinks,
                      allRoutes.personal,
                      allRoutes.projects,
                      allRoutes.blog,
                      allRoutes.social,
                      allRoutes.legal,
                    ]}
                  />
                </Layout.Header>
                <Layout.Main>{children}</Layout.Main>
                <Layout.Footer>
                  <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
                    <Flex align="center" justify="center">
                      <Separator size="3" />
                    </Flex>
                    <Section size="2" pb="0">
                      <Footer pages={allRoutes.social.pages.slice(0, 4)} />
                    </Section>
                  </Container>
                </Layout.Footer>
              </Layout.Root>
            </Layout.Background>
            {!isProduction && <ScreenSizeIndicator />}
          </Providers>
        </div>
      </body>
    </html>
  );
}

const backgroundImageStyle: React.CSSProperties = {
  backgroundColor: "var(--color-background)",
} as React.CSSProperties;
