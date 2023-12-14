import React from "react";
import { Box, Container, Section } from "@radix-ui/themes";

import { Breadcrumbs } from "~/components/breadcrumbs";
import { Layout } from "~/components/layout";

export default function PagesLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <React.Fragment>
      <Layout.Content>
        <Box asChild width="100%" style={{ maxWidth: 858 }}>
          <Section size={{ initial: "2", xs: "3" }}>
            <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
              <Breadcrumbs />
              {children}
            </Container>
          </Section>
        </Box>
      </Layout.Content>
    </React.Fragment>
  );
}
