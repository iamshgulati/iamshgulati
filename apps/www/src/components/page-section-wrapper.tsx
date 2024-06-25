import React from "react";
import { Section } from "@radix-ui/themes";

export const PageSectionWrapper = ({
  style = undefined,
  children = undefined,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section> &
  React.ComponentPropsWithoutRef<"section">): React.JSX.Element => (
  <Section
    width="100%"
    size={{ initial: "2", md: "4" }}
    px={{ initial: "5", xs: "6", sm: "7", md: "9" }}
    style={{ maxWidth: "var(--docs-page-max-width)", ...style }}
    {...props}
  >
    {children}
  </Section>
);
