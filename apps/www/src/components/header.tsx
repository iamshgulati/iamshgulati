"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  AccessibleIcon,
  Box,
  Flex,
  IconButton,
  Tooltip,
} from "@radix-ui/themes";

import { navConfig } from "~/config/nav";
import { siteConfig } from "~/config/site";
import { useOnScroll } from "~/hooks/useOnScroll";
import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";
import { cn } from "~/lib/utils";
import { BoxLink } from "./box-link";
import styles from "./header.module.css";
import { SiteLogo, SiteLogoIcon } from "./site-logo";

export interface HeaderProps {
  sticky?: boolean;
  ghost?: boolean;
}

export function Header({
  children,
  sticky = false,
  ghost = false,
}: React.PropsWithChildren<HeaderProps>): React.JSX.Element {
  const { scrollState } = useOnScroll(0, ghost);

  return (
    <Box
      data-scroll-state={scrollState}
      className={cn(
        styles.HeaderRoot,
        sticky ? styles.Sticky : "",
        ghost ? styles.Ghost : "",
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
            align="center"
            justify="center"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
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
            <Search />
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
            <Search />
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
      <HeaderProductLink
        href="/"
        active={["/", "/about", "/thoughts", "/quotes", "/contact"].includes(
          pathname,
        )}
      >
        Home
      </HeaderProductLink>
      {navConfig.mainNavItems.map((item) => (
        <HeaderProductLink
          key={item.href}
          href={item.href}
          active={
            !["/"].includes(item.href) &&
            (pathname === item.href || pathname.startsWith(item.href))
          }
        >
          {item.title}
        </HeaderProductLink>
      ))}
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

const Search = (): React.JSX.Element => {
  return (
    <Tooltip content="Search website">
      <IconButton size="3" variant="ghost" color="gray">
        <AccessibleIcon label="Light theme">
          <MagnifyingGlassIcon width="20" height="20" />
        </AccessibleIcon>
      </IconButton>
    </Tooltip>
  );
};
