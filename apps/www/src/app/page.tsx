import React from "react";
import {
  ArrowTopRightIcon,
  ChevronRightIcon,
  FileTextIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";

import { HeroHeading } from "~/components/heading";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";

export default function HomePage(): React.JSX.Element {
  return (
    <Section size={{ initial: "2", xs: "3" }}>
      <Container mx={{ initial: "5", sm: "6", md: "9" }}>
        <Box style={{ maxWidth: 700 }}>
          <Hero />
        </Box>
      </Container>
    </Section>
  );
}

const Hero = (): React.JSX.Element => (
  <React.Fragment>
    <Text as="p" mb="1" color="gray" size={{ initial: "5", xs: "7" }}>
      Hello!
    </Text>
    <HeroHeading as="h1" mb="6">
      I&apos;m Shubham Gulati,
    </HeroHeading>
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
      <NextLink href="/about">
        <Button
          size="3"
          style={{
            paddingLeft: "var(--space-5)",
            paddingRight: "var(--space-5)",
            gap: "var(--space-2)",
          }}
        >
          <PersonIcon width="18" height="18" />
          <Text>ABOUT</Text>
          <ChevronRightIcon width="18" height="18" />
        </Button>
      </NextLink>
      <Link href={siteConfig.links.resume} target="_blank" rel="noreferrer">
        <Button
          variant="soft"
          size="3"
          style={{
            paddingLeft: "var(--space-5)",
            paddingRight: "var(--space-5)",
            gap: "var(--space-2)",
          }}
        >
          <FileTextIcon width="18" height="18" />
          <Text>RESUME</Text>
          <ArrowTopRightIcon width="18" height="18" />
        </Button>
      </Link>
    </Flex>
  </React.Fragment>
);
