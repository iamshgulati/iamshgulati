import React from "react";
import { ArrowTopRightIcon, PersonIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Grid, Link, Section, Text } from "@radix-ui/themes";
import Balancer from "react-wrap-balancer";

import { HeroHeading } from "~/components/page-heading";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import styles from "./page.module.css";

export default function HomePage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size={{ initial: "2", xs: "3" }}>
        <Box
          mx={{ initial: "4", xs: "5", sm: "6", md: "9", xl: "auto" }}
          style={{ maxWidth: "1400px" }}
        >
          <Grid gapX="9" gapY="4" className={styles.HeroGridContainer}>
            <Box my="4" className={styles.HeroHeadingContainer}>
              <HeroHeading as="h1">
                Hello! I&apos;m
                <br />
                Shubham Gulati,
              </HeroHeading>
            </Box>
            <Box className={styles.HeroPastExperienceContainer}>
              <Balancer ratio={0.4}>
                <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }}>
                  Past — Senior Technology Consultant @ Deloitte Consulting.
                  Software Engineer and Certified Cloud Architect.
                </Text>
              </Balancer>
            </Box>
            <Box className={styles.HeroCurrentlyContainer}>
              <Balancer ratio={0.6}>
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
              </Balancer>
            </Box>
            <Box className={styles.HeroCTADescription}>
              <Balancer>
                <Text as="p" size={{ initial: "3", xs: "4", sm: "5" }}>
                  Here&apos;s many useless facts about some{" "}
                  <strong>less useless things</strong> that I do.
                </Text>
              </Balancer>
            </Box>
            <Flex
              direction={{ initial: "column", xs: "row" }}
              gap={{ initial: "3", xs: "5" }}
              className={styles.HeroCTAButtonsContainer}
              style={{
                textAlign: "center",
              }}
            >
              <NextLink href="/about">
                <Button
                  size="3"
                  style={{
                    width: "100%",
                    paddingLeft: "var(--space-5)",
                    paddingRight: "var(--space-5)",
                  }}
                >
                  <PersonIcon width="18" height="18" aria-hidden />
                  <Text>ABOUT</Text>
                </Button>
              </NextLink>
              <Link
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="soft"
                  size="3"
                  style={{
                    width: "100%",
                    paddingLeft: "var(--space-5)",
                    paddingRight: "var(--space-5)",
                  }}
                >
                  <ArrowTopRightIcon width="18" height="18" aria-hidden />
                  <Text>RESUME</Text>
                </Button>
              </Link>
            </Flex>
          </Grid>
        </Box>
      </Section>
    </React.Fragment>
  );
}
