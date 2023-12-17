import React from "react";
import { Container, Flex, Section, Separator } from "@radix-ui/themes";

import { BackgroundImage } from "~/components/background-image";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { allRoutes } from "~/lib/routes";

export default function HomeLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <React.Fragment>
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

      <Layout.Root>
        <Layout.BackgroundImage>
          <BackgroundImage style={backgroundImageStyle} id="1" />
        </Layout.BackgroundImage>
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
    </React.Fragment>
  );
}

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
