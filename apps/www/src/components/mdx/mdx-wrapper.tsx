import React from "react";
import { Flex, Section } from "@radix-ui/themes";

import { BackButton } from "~/components/back-button";
import { TitleAndDescription } from "~/components/title-and-description";
import type { Frontmatter } from "~/types/frontmatter";

interface MDXWrapperProps {
  metadata: Frontmatter;
}

export const MDXWrapper = ({
  metadata,
  children = undefined,
}: React.PropsWithChildren<MDXWrapperProps>): React.JSX.Element => {
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
