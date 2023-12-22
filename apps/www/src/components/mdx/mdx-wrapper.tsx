import React from "react";
import { Section } from "@radix-ui/themes";

import { PageTitleAndDescription } from "~/components/page-title-and-description";
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
        <PageTitleAndDescription
          title={metadata.title}
          description={metadata.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>{children}</Section>
    </React.Fragment>
  );
};
