import React from "react";
import { Box, Container, Section } from "@radix-ui/themes";

import { Breadcrumbs } from "~/components/breadcrumbs";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { allRoutes } from "~/lib/routes";

export default function ContentLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <React.Fragment>
      <Layout.Header>
        <Header
          sticky
          ghost
          autoHide
          backdrop
          scrollDelay={30}
          productLinkRoute={allRoutes.productLinks}
          commandMenuRoutes={[
            allRoutes.projects,
            allRoutes.blog,
            allRoutes.social,
          ]}
        />
      </Layout.Header>

      <Layout.Main>
        <Layout.Content>
          <Box asChild width="100%" style={{ maxWidth: 858 }}>
            <Section size={{ initial: "2", xs: "3" }}>
              <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
                <Breadcrumbs omitCurrentLabel />
                {children}
              </Container>
            </Section>
          </Box>
        </Layout.Content>
      </Layout.Main>
    </React.Fragment>
  );
}
