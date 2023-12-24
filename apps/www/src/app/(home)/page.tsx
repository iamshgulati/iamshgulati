import React from "react";
import {
  ArrowTopRightIcon,
  ChevronRightIcon,
  FileTextIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Flex, Link, Section, Text } from "@radix-ui/themes";

import { HeroHeading } from "~/components/page-heading";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";

export default function HomePage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size="1">
        <Section size={{ initial: "2", xs: "3" }} pb="0">
          <Box mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
            <HeroHeading as="h1">Hello! I&apos;m Shubham Gulati,</HeroHeading>
          </Box>
        </Section>
      </Section>
      <Section size={{ initial: "2", xs: "3" }} pt="0">
        <Box mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <HeroContent />
        </Box>
      </Section>
    </React.Fragment>
  );
}

const HeroContent = (): React.JSX.Element => (
  <React.Fragment>
    <Flex direction={{ initial: "column-reverse", md: "row" }} gap="6">
      <Box>
        <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }} mb="6">
          Here&apos;s some useless facts about some less useless things that I
          can do.
        </Text>
        <Flex direction="row" gap="6">
          <NextLink href="/about">
            <Button
              size="3"
              style={{
                paddingLeft: "var(--space-5)",
                paddingRight: "var(--space-5)",
                gap: "var(--space-2)",
              }}
            >
              <PersonIcon width="18" height="18" aria-hidden />
              <Text>ABOUT</Text>
              <ChevronRightIcon width="18" height="18" aria-hidden />
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
              <FileTextIcon width="18" height="18" aria-hidden />
              <Text>RESUME</Text>
              <ArrowTopRightIcon width="18" height="18" aria-hidden />
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box>
        <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }} mb="4">
          Past — Senior Technology Consultant @ Deloitte Consulting. Software
          Engineer and Certified Cloud Architect.
        </Text>
        <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }}>
          I love tinkering with code. Currently, I am{" "}
          <Text color="gray">
            <s>
              learning the craft of designing high-performance cloud
              architectures and minimalistic front-end interfaces
            </s>{" "}
          </Text>
          just trying to figure out what I want to do next in life.
        </Text>
      </Box>
    </Flex>
  </React.Fragment>
);
