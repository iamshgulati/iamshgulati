import React from "react";
import { Box, Container, Section, Text } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";
import { Layout } from "./layout";
import { PageHeading } from "./page-heading";

interface MDXPageLayoutProps {
  metadata: Frontmatter;
}

export function MDXPageLayout({
  metadata,
  children = undefined,
}: React.PropsWithChildren<MDXPageLayoutProps>): React.JSX.Element {
  return (
    <Layout.Content>
      <Box asChild width="100%" style={{ maxWidth: 858 }}>
        <Section size={{ initial: "2", xs: "3" }}>
          <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
            <HeroSection
              title={metadata.title}
              description={metadata.description}
            />
            <Section size="2" pb="0">
              {children}
            </Section>
          </Container>
        </Section>
      </Box>
    </Layout.Content>
  );
}

const HeroSection = ({
  title,
  description = undefined,
}: {
  title: string;
  description?: string;
}): React.JSX.Element => (
  <React.Fragment>
    <PageHeading as="h1" mb={{ initial: "3", xs: "5" }}>
      {title}
    </PageHeading>
    {description && (
      <Text as="p" color="gray" size={{ initial: "4", xs: "6" }}>
        {description}
      </Text>
    )}
  </React.Fragment>
);
