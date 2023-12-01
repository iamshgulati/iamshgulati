import React from "react";
import { Section, Text } from "@radix-ui/themes";

import type { Frontmatter } from "~/types";
import { PageHeading } from "./page-heading";

interface MDXPageLayoutProps {
  metadata: Frontmatter;
}

export function MDXPageLayout({
  metadata,
  children = undefined,
}: React.PropsWithChildren<MDXPageLayoutProps>): React.JSX.Element {
  return (
    <React.Fragment>
      <Hero title={metadata.title} description={metadata.description} />
      <Section size="2" pb="0">
        {children}
      </Section>
    </React.Fragment>
  );
}

const Hero = ({
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
