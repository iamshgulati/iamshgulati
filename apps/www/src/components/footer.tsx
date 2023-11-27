import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Box, Flex, Grid, Heading, Link, Text } from "@radix-ui/themes";

import { navConfig } from "~/config/nav";
import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import type { NavItem } from "~/types";
import { BoxLink } from "./box-link";
import styles from "./footer.module.css";
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
                  {siteConfig.name}
                </Link>
              </NextLink>
            </Heading>
            <Text size="1" color="gray">
              &copy; {new Date().getFullYear()}, All rights reserved
            </Text>
          </Box>
        </Flex>

        <Group groupTitle="Explore" items={navConfig.mainNavItems}>
          <GroupItem href="/contact">Contact</GroupItem>
        </Group>

        <Group groupTitle="Social">
          <GroupItem href={siteConfig.links.github}>GitHub</GroupItem>
          <GroupItem href={siteConfig.links.linkedin}>LinkedIn</GroupItem>
          <GroupItem href={siteConfig.links.twitter}>Twitter</GroupItem>
        </Group>
      </footer>
    </Grid>
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
    {items.map((item) => (
      <GroupItem key={item.href} href={item.href}>
        {item.title}
      </GroupItem>
    ))}
    {children}
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
          <ArrowTopRightIcon aria-hidden style={{ color: "var(--gray-9)" }} />
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
