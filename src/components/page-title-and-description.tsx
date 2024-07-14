import React from "react";
import { Heading, Text } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";

export const PageTitleAndDescription = ({
  title,
  description = undefined,
}: Pick<Frontmatter, "title" | "description">): React.JSX.Element => (
  <React.Fragment>
    <Heading
      as="h1"
      size={{ initial: "6", sm: "8" }}
      mb="2"
      style={
        {
          fontWeight: "700",
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-letter-spacing": "-0.02em",
          "--heading-font-size-adjust": "1.5",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust) * 0.9)",
        } as React.CSSProperties
      }
    >
      {title}
    </Heading>
    {description && (
      <Text as="p" size={{ initial: "3", sm: "5" }} color="gray">
        {description}
      </Text>
    )}
  </React.Fragment>
);
