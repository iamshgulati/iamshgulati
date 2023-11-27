import React from "react";
import { FileTextIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";

import { PageHeading } from "~/components/page-heading";
import { siteConfig } from "~/config/site";
import { Certifications } from "./certifications";
import Experience from "./experience.mdx";
import SkillsAndTools from "./skills-and-tools.mdx";

export default function MarketingPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size={{ initial: "2", xs: "3" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Box style={{ maxWidth: "700px" }}>
            <HeroSection />
          </Box>
          <Section size="3" pb="0">
            <Separator size="2" />
            <Section size="3">
              <Experience />
            </Section>
            <Separator size="2" />
            <Section size="3">
              <Box style={{ maxWidth: "700px" }}>
                <Certifications />
              </Box>
            </Section>
            <Separator size="2" />
            <Section size="3" pb="0">
              <SkillsAndTools />
            </Section>
          </Section>
        </Container>
      </Section>
    </React.Fragment>
  );
}

const HeroSection = (): React.JSX.Element => (
  <React.Fragment>
    <Text as="p" mb="1" color="gray" size={{ initial: "5", xs: "7" }}>
      Hello!
    </Text>
    <PageHeading as="h1" mb="6" variant="sans">
      I&apos;m Shubham Gulati,
    </PageHeading>
    <Text as="p" size={{ initial: "3", xs: "5" }}>
      Software Engineer and Certified Cloud Architect.
    </Text>
    <Text as="p" mb="6" size={{ initial: "3", xs: "5" }}>
      Past — Senior Technology Consultant @ Deloitte Consulting.
    </Text>
    <Text as="p" mb="6" color="gray" size={{ initial: "3", xs: "5" }}>
      I love tinkering with code. Currently, I am learning the craft of
      designing high-performance cloud architectures and minimalistic front-end
      interfaces.
    </Text>
    <Flex direction="row" gap="4">
      <Link
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="3"
          style={{
            paddingLeft: "var(--space-5)",
            paddingRight: "var(--space-5)",
          }}
        >
          <LinkedInLogoIcon width="18" height="18" />
          <Text weight="medium">LinkedIn</Text>
        </Button>
      </Link>
      <Link
        href={siteConfig.links.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="soft"
          size="3"
          style={{
            paddingLeft: "var(--space-5)",
            paddingRight: "var(--space-5)",
          }}
        >
          <FileTextIcon width="18" height="18" />
          <Text weight="medium">RESUME</Text>
        </Button>
      </Link>
    </Flex>
  </React.Fragment>
);
