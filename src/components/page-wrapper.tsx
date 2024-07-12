import React from "react";
import { Container, Section } from "@radix-ui/themes";

export const PageWrapper = ({
  children = undefined,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>): React.JSX.Element => (
  <Section width="100%" size={{ initial: "2", md: "4" }} {...props}>
    <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
      {children}
    </Container>
  </Section>
);
