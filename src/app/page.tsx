import React from "react";
import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";

import { Icons } from "~/components/icons";
import { HeroHeading } from "~/components/page-headings";
import { PageWrapper } from "~/components/page-wrapper";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import styles from "./page.module.css";

export default function HomePage(): React.JSX.Element {
  return (
    <PageWrapper>
      <Box position="relative" mb="7"></Box>
      <Grid
        gapX="6"
        gapY={{ initial: "3", md: "4" }}
        className={styles.HeroGridContainer}
      >
        <Box className={styles.HeroHeadingContainer}>
          <HeroHeading as="h1">
            Hello! I&apos;m
            <br />
            Shubham Gulati,
          </HeroHeading>
        </Box>
        <Box className={styles.HeroPastExperienceContainer}>
          <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }}>
            Senior Software Engineer and Certified Cloud Architect. Past –
            Senior Technology Consultant @ Deloitte Consulting.
          </Text>
        </Box>
        <Box className={styles.HeroCurrentlyContainer}>
          <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }}>
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
          </Text>
        </Box>
        <Box className={styles.HeroCTADescription}>
          <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }}>
            Here&apos;s many useless facts about me and a few{" "}
            <strong>less useless things</strong> that I can do.
          </Text>
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
