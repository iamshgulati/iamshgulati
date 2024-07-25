import React from "react";
import { Container, Section, Separator } from "@radix-ui/themes";

import { BlogSection } from "~/components/home/blog-section";
import { HeroSection } from "~/components/home/hero-section";
import { ProjectsSection } from "~/components/home/projects-section";

export default function HomePage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <HeroSection />
        </Container>
      </Section>
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
      <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
        <Separator size="2" />
      </Container>
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <ProjectsSection />
        </Container>
      </Section>
    </React.Fragment>
  );
}
