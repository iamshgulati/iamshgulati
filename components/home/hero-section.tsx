import React from "react";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import styles from "./hero-section.module.css";

export const HeroSection = (): React.JSX.Element => (
  <Grid
    columns={{ initial: "1", md: "3" }}
    gapX="6"
    gapY={{ initial: "3", md: "4" }}
    mt="7"
  >
    <Box className={styles.HeroHeadingContainer}>
      <HeroHeading>
        Hello! I&apos;m
        <br />
        Shubham Gulati,
      </HeroHeading>
    </Box>
    <Box className={styles.HeroPastExperienceContainer}>
      <StyledText>
        Senior Software Engineer and Certified Cloud Architect. Past – Senior
        Technology Consultant @ Deloitte Consulting.
      </StyledText>
    </Box>
    <Box className={styles.HeroCurrentlyContainer}>
      <StyledText>
        I love tinkering with code. And, currently I am{" "}
        <Text color="gray">
          <s>
            learning the craft of designing high-performance cloud architectures
            and minimalistic front-end interfaces
          </s>
        </Text>{" "}
        <Text>
          just trying to figure out what do I want to do with my life.
        </Text>
      </StyledText>
    </Box>
    <Box className={styles.HeroCTADescription}>
      <StyledText>
        Here&apos;s many useless facts about me and a few{" "}
        <strong>less useless things</strong> that I can do.
      </StyledText>
    </Box>
    <Flex
      gap={{ initial: "3", xs: "5" }}
      mt="2"
      className={styles.HeroCTAButtonsContainer}
      style={{
        textAlign: "center",
      }}
    >
      <Button
        asChild
        size="3"
        style={{
          flexGrow: 1,
        }}
      >
        <NextLink href="/work">
          <Text>WORK</Text>
          <ArrowRightIcon width="18" height="18" aria-hidden />
        </NextLink>
      </Button>
      <Button asChild size="3" variant="soft" style={{ flexGrow: 1 }}>
        <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
          <Text style={{ textDecorationLine: "none" }}>RESUME</Text>
          <ArrowTopRightIcon width="18" height="18" aria-hidden />
        </a>
      </Button>
    </Flex>
  </Grid>
);

const HeroHeading = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Heading>): React.JSX.Element => (
  <Heading
    as="h1"
    size={{ initial: "2", xs: "6", sm: "7", md: "8" }}
    style={
      {
        fontWeight: "600",
        // "--heading-letter-spacing": "-0.02em",
        "--heading-font-size-adjust": "3.3",
        lineHeight:
          "calc(var(--line-height) * var(--heading-font-size-adjust) * 0.9)",
      } as React.CSSProperties
    }
    {...props}
  />
);

const StyledText = ({ ...props }: React.PropsWithChildren) => (
  <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }} {...props} />
);
