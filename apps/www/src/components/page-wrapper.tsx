import React from "react";
import { Container, Section } from "@radix-ui/themes";

export const PageWrapper = ({
  children = undefined,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>): React.JSX.Element => (
  <Section width="100%" size={{ initial: "2", md: "4" }} {...props}>
    <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
      {children}
    </Container>
  </Section>
);
