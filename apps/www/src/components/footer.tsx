import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Box, Flex, Grid, Heading, Link, Text } from "@radix-ui/themes";

import { personalNav, professionalNav, socialNav } from "~/config/nav";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import type { NavItem } from "~/types";
import { BoxLink } from "./box-link";
import styles from "./footer.module.css";
import { SiteLogoIcon } from "./site-logo";

export function Footer(): React.JSX.Element {
  return (
    <footer>
      <Grid pb="9" gapX="7" gapY="8" className={styles.Footer}>
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
          <Box>
            <Heading as="h2" size="3" mt="5">
              <NextLink href="/" passHref legacyBehavior>
                <Link color="gray" style={{ color: "inherit" }}>
                  {siteConfig.name}
                </Link>
              </NextLink>
            </Heading>
            <Text as="p" size="1" color="gray" mt="1">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </Text>
          </Box>
        </Flex>

        <Group groupTitle="Professional" items={professionalNav.mainNav} />

        <Group groupTitle="Personal" items={personalNav.mainNav} />

        <Group groupTitle="Social" items={socialNav.mainNav.slice(0, 3)} />
      </Grid>
      {/*
      <Flex align="center" justify="between" mt="-4" mb="7">
        <Text size="1" color="gray">
          &copy; 2016 — {new Date().getFullYear()} All Rights Reserved.
        </Text>
        <ThemeToggle />
      </Flex>
      */}
    </footer>
  );
}

const Group = ({
  groupTitle,
  items = [],
  children = undefined,
}: React.PropsWithChildren<{
  groupTitle: string;
  items?: NavItem[];
}>): React.JSX.Element => (
  <Box>
    <Heading as="h3" size="3">
      {groupTitle}
    </Heading>
    {children}
    {items.map((item) => (
      <GroupItem key={item.slug} href={item.slug}>
        {item.title}
      </GroupItem>
    ))}
  </Box>
);

const GroupItem = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  if (href.startsWith("http")) {
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
          {children}
          <ArrowTopRightIcon aria-hidden style={{ color: "var(--gray-8)" }} />
        </Link>
      </Text>
    );
  }

  return (
    <Text as="p" size="2" mt="3">
      <NextLink href={href} passHref legacyBehavior>
        <Link color="gray">{children}</Link>
      </NextLink>
    </Text>
  );
};
