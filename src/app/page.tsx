import React from "react";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";

import { Icons } from "~/components/icons";
import { PageWrapper } from "~/components/page-wrapper";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import styles from "./page.module.css";

export default function HomePage(): React.JSX.Element {
  return (
    <PageWrapper>
      <Grid
        gapX="6"
        gapY={{ initial: "3", md: "4" }}
        className={styles.HeroGridContainer}
      >
        <Box className={styles.HeroHeadingContainer} my="7" mb="0">
          <HeroHeading>
            Hello! I&apos;m
            <br />
            Shubham Gulati,
          </HeroHeading>
        </Box>
        <Box className={styles.HeroPastExperienceContainer}>
          <StyledText>
            Senior Software Engineer and Certified Cloud Architect. Past –
            Senior Technology Consultant @ Deloitte Consulting.
          </StyledText>
        </Box>
        <Box className={styles.HeroCurrentlyContainer}>
          <StyledText>
            I love tinkering with code. And, currently I am{" "}
            <Text color="gray">
              <s>
                learning the craft of designing high-performance cloud
                architectures and minimalistic front-end interfaces
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
              <Icons.ArrowRightIcon width="18" height="18" aria-hidden />
            </NextLink>
          </Button>
          <Button asChild size="3" variant="soft" style={{ flexGrow: 1 }}>
            <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
              <Text style={{ textDecorationLine: "none" }}>RESUME</Text>
              <Icons.ArrowTopRightIcon width="18" height="18" aria-hidden />
            </a>
          </Button>
        </Flex>
      </Grid>
    </PageWrapper>
  );
}

const HeroHeading = ({
  ...props
}: React.ComponentProps<typeof Heading>): React.JSX.Element => (
  <Heading
    as="h1"
    size={{ initial: "1", xs: "5", sm: "6", md: "7", lg: "8" }}
    style={
      {
        fontWeight: "600",
        "--heading-font-family":
          "var(--font-heading), var(--default-font-family)",
        "--heading-letter-spacing": "-0.02em",
        "--heading-font-size-adjust": "3.8",
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
