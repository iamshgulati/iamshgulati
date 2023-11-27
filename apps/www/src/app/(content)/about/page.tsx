import React from "react";
import { Box, Container, Section, Separator, Text } from "@radix-ui/themes";

import { PageHeading } from "~/components/page-heading";
import { Certifications } from "./certifications";
import Experience from "./experience.mdx";
import SkillsAndTools from "./skills-and-tools.mdx";

export default function AboutPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size={{ initial: "2", xs: "3" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Box style={{ maxWidth: 858 }}>
            <HeroSection title="About Me" description="Learn more about me." />
            <Section size="3">
              <Experience />
            </Section>
            <Separator size="2" />
            <Section size="3">
              <Certifications />
            </Section>
            <Separator size="2" />
            <Section size="3" pb="0">
              <SkillsAndTools />
            </Section>
          </Box>
        </Container>
      </Section>
    </React.Fragment>
  );
}

const HeroSection = ({
  title,
  description = undefined,
}: {
  title: string;
  description?: string;
}): React.JSX.Element => (
  <React.Fragment>
    <PageHeading as="h1" mb={{ initial: "3", xs: "5" }}>
      {title}
    </PageHeading>
    {description && (
      <Text as="p" color="gray" size={{ initial: "4", xs: "6" }}>
        {description}
      </Text>
    )}
  </React.Fragment>
);
