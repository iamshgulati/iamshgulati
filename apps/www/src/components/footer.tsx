import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import {
  AccessibleIcon,
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Text,
} from "@radix-ui/themes";

import { learnNavConfig, workNavConfig } from "~/config/nav";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import type { NavItem } from "~/types";
import { BoxLink } from "./box-link";
import styles from "./footer.module.css";
import { Icons } from "./icons";
import { SiteLogoIcon } from "./logo";

export function Footer(): React.JSX.Element {
  return (
    <Grid asChild pb="9" gapX="7" gapY="8" className={styles.Footer}>
      <footer>
        <Flex
          direction="column"
          align="start"
          justify="between"
          className={styles.SiteLogo}
        >
          <NextLink href="/" passHref legacyBehavior>
            <BoxLink ariaLabel={`${siteConfig.name}'s Homepage`}>
              <SiteLogoIcon />
            </BoxLink>
          </NextLink>
          <Box mt="5">
            <Heading as="h2" size="3">
              <NextLink href="/" passHref legacyBehavior>
                <Link color="gray" style={{ color: "inherit" }}>
                  Shubham Gulati
                </Link>
              </NextLink>
            </Heading>
            <Text size="1" color="gray">
              &copy; {new Date().getFullYear()}, All rights reserved
            </Text>
          </Box>
          {/* <Box pr="8" mt="5">
            <NextLink href="/" passHref legacyBehavior>
              <Link
                style={{
                  color: "inherit",
                  textDecorationColor: "var(--gray-a6)",
                }}
              >
                <Text
                  as="span"
                  weight="bold"
                  size="4"
                  style={{
                    letterSpacing: "var(--letter-spacing-6)",
                  }}
                >
                  {siteConfig.name}
                </Text>
              </Link>
            </NextLink>
            <Flex mt="2" gap="5">
              <SocialIcon
                href={siteConfig.links.linkedin}
                icon="LinkedInLogoIcon"
              />
              <SocialIcon
                href={siteConfig.links.github}
                icon="GitHubLogoIcon"
              />
              <SocialIcon
                href={siteConfig.links.twitter}
                icon="TwitterLogoIcon"
              />
            </Flex>
          </Box> */}
        </Flex>

        <FooterGroup
          groupTitle={workNavConfig.title}
          items={workNavConfig.mainNavItems}
        />

        <FooterGroup
          groupTitle={learnNavConfig.title}
          items={learnNavConfig.mainNavItems}
        />

        <FooterGroup groupTitle="Social">
          <SocialLink label="GitHub" href={siteConfig.links.github} />
          <SocialLink label="LinkedIn" href={siteConfig.links.linkedin} />
          <SocialLink label="Twitter" href={siteConfig.links.twitter} />
        </FooterGroup>
      </footer>
    </Grid>
  );
}

const _SocialIcon = ({
  icon,
  href,
}: {
  icon: keyof typeof Icons;
  href: string;
}): React.JSX.Element => {
  const SocialIcon = Icons[icon];
  const SocialNetwork = icon.replace("Logo", "").replace("Icon", "");

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <IconButton size="3" variant="ghost" color="gray">
        <AccessibleIcon label={SocialNetwork}>
          <SocialIcon width="16" height="16" />
        </AccessibleIcon>
      </IconButton>
    </Link>
  );
};

const FooterGroup = ({
  groupTitle,
  items = [],
  children,
}: React.PropsWithChildren<{
  groupTitle: string;
  items?: NavItem[];
}>): React.JSX.Element | null => {
  if (items.length) {
    return (
      <Box>
        <Heading as="h3" size="3">
          {groupTitle}
        </Heading>
        {items.map((item, key) => (
          <Text key={key} as="p" size="2" mt="3">
            <NextLink href={item.href} passHref legacyBehavior>
              <Link
                color="gray"
                // highContrast={usePathname().startsWith(item.href)}
              >
                {item.title}
              </Link>
            </NextLink>
          </Text>
        ))}
      </Box>
    );
  }

  if (children) {
    return (
      <Box>
        <Heading as="h3" size="3">
          {groupTitle}
        </Heading>
        {children}
      </Box>
    );
  }

  return null;
};

const SocialLink = ({
  label,
  href,
}: {
  label: string;
  href: string;
}): React.JSX.Element => {
  return (
    <Text as="p" size="2" mt="3">
      <Link
        href={href}
        color="gray"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-2)",
        }}
      >
        {label}
        <ArrowTopRightIcon aria-hidden style={{ color: "var(--gray-9)" }} />
      </Link>
    </Text>
  );
};
