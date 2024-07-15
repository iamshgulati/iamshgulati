import React from "react";
import { Container, Section } from "@radix-ui/themes";

import { HeroSection } from "~/components/home/hero-section";

export default function HomePage(): React.JSX.Element {
  return (
    <Section size={{ initial: "2", md: "4" }}>
      <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
        <HeroSection />
      </Container>
    </Section>
  );
}
