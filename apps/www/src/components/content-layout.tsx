import React from "react";
import { Flex, Section, Text } from "@radix-ui/themes";

import type { ContentPage } from "~/lib/mdx";
import { BackButton } from "./back-button";
import { PageHeading } from "./heading";

interface ContentLayoutProps {
  metadata: ContentPage;
}

export function ContentLayout({
  metadata,
  children = undefined,
}: React.PropsWithChildren<ContentLayoutProps>): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size="1" pt="4">
        <TitleAndDescription
          title={metadata.title}
          description={metadata.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>{children}</Section>
      <Section size={{ initial: "1", xs: "2" }} pb="0">
        <Flex align="center" justify="center">
          <BackButton size="3" />
        </Flex>
      </Section>
    </React.Fragment>
  );
}

const TitleAndDescription = ({
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
