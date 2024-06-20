import React from "react";
import { Box, Container, Flex, Section, Separator } from "@radix-ui/themes";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { allRoutes } from "~/lib/routes";

export default function MDXLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
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
        <Layout.Main>
          <Layout.Content>
            <Box asChild width="100%" style={{ maxWidth: 858 }}>
              <Section size={{ initial: "2", xs: "4" }}>
                <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
                  {children}
                </Container>
              </Section>
            </Box>
          </Layout.Content>
        </Layout.Main>
        <Layout.Footer>
          <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
            <Flex align="center" justify="center">
              <Separator size="3" />
            </Flex>
            <Section size="2" pb="0">
              <Footer pages={allRoutes.social.pages.slice(0, 5)} />
            </Section>
          </Container>
        </Layout.Footer>
      </Layout.Root>
    </Layout.Background>
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
