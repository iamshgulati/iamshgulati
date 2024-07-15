import React from "react";
import { Flex, Section } from "@radix-ui/themes";

export const PageWrapper = ({
  style = undefined,
  ...props
}: React.PropsWithChildren<
  React.ComponentPropsWithoutRef<typeof Section>
>): React.JSX.Element => (
  <Flex
    direction="column"
    flexGrow="1"
    align="center"
    style={{
      maxWidth: "100%",
    }}
  >
    <Section
      width="100%"
      size={{ initial: "2", md: "4" }}
      px={{ initial: "4", xs: "5", sm: "6", md: "9" }}
      style={{
        maxWidth: "var(--docs-page-max-width)",
        ...style,
      }}
      {...props}
    />
  </Flex>
);
