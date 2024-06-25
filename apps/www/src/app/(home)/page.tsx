import React from "react";
import { ArrowTopRightIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Section,
  Text,
} from "@radix-ui/themes";

import { HeroHeading } from "~/components/page-heading";
import { siteConfig } from "~/config/site";
import styles from "./page.module.css";

export default function HomePage(): React.JSX.Element {
  return (
    <Box
      asChild
      width="100%"
      style={{
        maxWidth: "var(--home-page-max-width)",
      }}
    >
      <Section size={{ initial: "2", xs: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
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
                Senior Software Engineer and Certified Cloud Architect. Past —
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
              {/* 
              <NextLink href="/work" passHref legacyBehavior>
                <Button
                  asChild
                  size="3"
                  style={{
                    flexGrow: 1
                  }}
                >
                  <a>
                    <Icons.HammerIcon width="18" height="18" aria-hidden />
                    <Text>WORK</Text>
                  </a>
                </Button>
              </NextLink>
              */}
              <Button asChild size="3" style={{ flexGrow: 1 }}>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInLogoIcon width="18" height="18" aria-hidden />
                  <Text style={{ textDecorationLine: "none" }}>LinkedIn</Text>
                </a>
              </Button>
              <Button asChild size="3" variant="soft" style={{ flexGrow: 1 }}>
                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowTopRightIcon width="18" height="18" aria-hidden />
                  <Text style={{ textDecorationLine: "none" }}>RESUME</Text>
                </a>
              </Button>
            </Flex>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
