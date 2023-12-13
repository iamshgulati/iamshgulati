import { ScreenSizeIndicator } from "~/components/screen-size-indicator";
import { Providers } from "~/providers";

import "~/styles/globals.css";

import type { Metadata } from "next";
import { Container, Flex, Section, Separator } from "@radix-ui/themes";

import { Footer } from "~/components/footer";
import { Layout } from "~/components/layout";
import { siteConfig } from "~/config/site";
import { isProduction } from "~/env.mjs";
import { Fonts } from "~/fonts";
import { allRoutes } from "~/lib/routes";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(Fonts.Heading, Fonts.Body, Fonts.Code)}>
        <div id="root">
          <Providers>
            <Layout.Root>
              <Layout.Background
                style={{
                  zIndex: -1,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 480,
                  opacity: 0.6,
                  background:
                    "linear-gradient(to bottom, transparent, transparent, transparent)",
                }}
              />

              {children}

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

            {!isProduction && <ScreenSizeIndicator />}
          </Providers>
        </div>
      </body>
    </html>
  );
}
