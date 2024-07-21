import React from "react";
import { Container, Section } from "@radix-ui/themes";

import { HeroSection } from "~/components/home/hero-section";

export default function HomePage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <HeroSection />
        </Container>
      </Section>
      {/*      
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Separator size="2" />
        </Container>
      </Section>
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <BlogSection />
        </Container>
      </Section>
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Separator size="2" />
        </Container>
      </Section>
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <ProjectsSection />
        </Container>
      </Section>
     */}
    </React.Fragment>
  );
}
