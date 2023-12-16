import React from "react";
import { Flex, Section } from "@radix-ui/themes";

import type { ContentPage } from "~/lib/mdx";
import { BackButton } from "./back-button";
import { TitleAndDescription } from "./title-and-description";

interface ContentLayoutProps {
  metadata: ContentPage;
}

export const ContentLayout = ({
  metadata,
  children = undefined,
}: React.PropsWithChildren<ContentLayoutProps>): React.JSX.Element => {
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
};
