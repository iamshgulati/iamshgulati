"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  AccessibleIcon,
  Box,
  Flex,
  IconButton,
  Link,
  Tooltip,
} from "@radix-ui/themes";

import {
  learnNavConfig,
  marketingNavConfig,
  workNavConfig,
} from "~/config/nav";
import { siteConfig } from "~/config/site";
import { useOnScroll } from "~/hooks/useOnScroll";
import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";
import { cn } from "~/lib/utils";
import { BoxLink } from "./box-link";
import styles from "./header.module.css";
import { Icons } from "./icons";
import { SiteLogo, SiteLogoIcon } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export interface HeaderProps {
  sticky?: boolean;
  ghost?: boolean;
}

export function Header({
  children,
  sticky = false,
  ghost = false,
}: React.PropsWithChildren<HeaderProps>): React.JSX.Element {
  const { scrollState } = useOnScroll(5, ghost);

  return (
    <Box
      data-scroll-state={scrollState}
      className={cn(
        styles.HeaderRoot,
        sticky ? styles.sticky : "",
        ghost ? styles.ghost : "",
      )}
    >
      <nav className={styles.HeaderInner}>
        <div className={styles.HeaderInnerBackdrop} />
        <Box className={styles.HeaderContainer}>
          <Flex
            display={{ initial: "flex", xs: "none" }}
            align="center"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            pl={{ initial: "4", sm: "6" }}
          >
            <HeaderLogoLink>
              <SiteLogoIcon />
            </HeaderLogoLink>
          </Flex>

          <Flex
            display={{ initial: "none", xs: "flex" }}
            align="center"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            pl={{ initial: "4", sm: "6" }}
          >
            <HeaderLogoLink>
              <SiteLogo />
            </HeaderLogoLink>
          </Flex>

          <Flex
            display={{
              initial: "none",
              sm: "flex",
            }}
            align="center"
            justify="center"
            position="absolute"
            top="0"
            bottom="0"
            style={{
              left: "calc(50% - 60px)",
              width: "120px",
            }}
          >
            <HeaderProductLinks />
          </Flex>

          <Flex
            display={{ initial: "flex", md: "none" }}
            align="center"
            gap="5"
            position="absolute"
            top="0"
            bottom="0"
            right="0"
            pr={{ initial: "4", sm: "6" }}
          >
            <HeaderSocialIcon
              href={siteConfig.links.github}
              icon="GitHubLogoIcon"
            />
            <ThemeToggle />
            <MobileMenu />
          </Flex>

          <Flex
            display={{ initial: "none", md: "flex" }}
            align="center"
            gap="5"
            position="absolute"
            top="0"
            bottom="0"
            right="0"
            pr={{ initial: "4", sm: "6" }}
          >
            {children}
            <HeaderSocialIcon
              href={siteConfig.links.github}
              icon="GitHubLogoIcon"
            />
            <ThemeToggle />
          </Flex>
        </Box>
      </nav>
    </Box>
  );
}

const HeaderProductLinks = (): React.JSX.Element => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      {marketingNavConfig.mainNavItems.length &&
      marketingNavConfig.mainNavItems[0] ? (
        <HeaderProductLink
          href={marketingNavConfig.mainNavItems[0].href}
          active={
            pathname === marketingNavConfig.hrefPrefix ||
            pathname === marketingNavConfig.mainNavItems[0]?.href
          }
        >
          {marketingNavConfig.title}
        </HeaderProductLink>
      ) : null}

      {workNavConfig.mainNavItems.length && workNavConfig.mainNavItems[0] ? (
        <HeaderProductLink
          href={workNavConfig.mainNavItems[0].href}
          active={pathname.startsWith(workNavConfig.hrefPrefix)}
        >
          {workNavConfig.title}
        </HeaderProductLink>
      ) : null}

      {learnNavConfig.mainNavItems.length && learnNavConfig.mainNavItems[0] ? (
        <HeaderProductLink
          href={learnNavConfig.mainNavItems[0].href}
          active={pathname.startsWith(learnNavConfig.hrefPrefix)}
        >
          {learnNavConfig.title}
        </HeaderProductLink>
      ) : null}
    </React.Fragment>
  );
};

const HeaderProductLink = ({
  active = false,
  children,
  href,
  ...props
}: React.PropsWithChildren<NextLinkProps> & {
  active?: boolean;
}): React.JSX.Element => (
  <NextLink href={href} passHref legacyBehavior>
    <a
      data-state={active ? "active" : "inactive"}
      className={styles.HeaderProductLink}
      {...props}
    >
      <span className={styles.HeaderProductLinkInner}>{children}</span>
      <span className={styles.HeaderProductLinkInnerHidden}>{children}</span>
    </a>
  </NextLink>
);

const HeaderLogoLink = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => (
  <NextLink href="/" passHref legacyBehavior>
    <BoxLink ariaLabel={`${siteConfig.name}'s Homepage`}>{children}</BoxLink>
  </NextLink>
);

const HeaderSocialIcon = ({
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
      <Tooltip content={`Go to ${SocialNetwork}`}>
        <IconButton size="3" variant="ghost" color="gray">
          <AccessibleIcon label={SocialNetwork}>
            <SocialIcon width="16" height="16" />
          </AccessibleIcon>
        </IconButton>
      </Tooltip>
    </Link>
  );
};
