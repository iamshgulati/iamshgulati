import React from "react";
import { Section, Separator, Text } from "@radix-ui/themes";

import { PageHeading } from "~/components/page-heading";
import { Certifications } from "./certifications";
import Experience from "./experience.mdx";
import SkillsAndTools from "./skills-and-tools.mdx";

export default function AboutPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Hero title="About Me" description="Learn more about me." />
      <Section size="2">
        <Experience />
      </Section>
      <Separator size="2" />
      <Section size="2">
        <Certifications />
      </Section>
      <Separator size="2" />
      <Section size="2" pb="0">
        <SkillsAndTools />
      </Section>
    </React.Fragment>
  );
}

const Hero = ({
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
