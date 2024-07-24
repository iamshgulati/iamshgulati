import React from "react";
import { Box, Flex } from "@radix-ui/themes";

import type { Route } from "~/lib/routes";
import type { Frontmatter } from "~/types/frontmatter";
import { cn } from "~/lib/classnames";
import { NextLink } from "~/lib/link";
import { staticRoutes } from "~/lib/routes";
import { BoxLink } from "./box-link";
import { HeaderMainNav } from "./header-main-nav";
import { HeaderShell } from "./header-shell";
import styles from "./header.module.css";
import { SiteLogo, SiteLogoIcon } from "./site-logo";
import { ThemeToggle } from "./theme-toggle";

type HeaderProps = React.PropsWithChildren<{
  sticky?: boolean;
  ghost?: boolean;
  autoHide?: boolean;
  viewportScrollFactorThreshold?: number;
  scrollDistanceThreshold?: number;
  backdrop?: boolean;
  backdropExtended?: boolean;
  mainNavLinks?: Frontmatter[];
  commandMenuRoutes?: Route[];
}>;

export const Header = ({
  sticky = false,
  ghost = false,
  autoHide = false,
  viewportScrollFactorThreshold = undefined,
  scrollDistanceThreshold = undefined,
  backdrop = false,
  backdropExtended = false,
  mainNavLinks = undefined,
  // commandMenuRoutes = undefined,
  children = undefined,
}: HeaderProps): React.JSX.Element => {
  return (
    <HeaderShell
      viewportScrollFactorThreshold={viewportScrollFactorThreshold}
      scrollDistanceThreshold={scrollDistanceThreshold}
      className={cn(
        styles.HeaderRoot,
        sticky && styles.sticky,
        ghost && styles.ghost,
        autoHide && styles.autoHide,
        backdrop && styles.backdrop,
        backdropExtended && [styles.backdrop, styles.extendBackdrop].join(" "),
      )}
    >
      <nav className={styles.HeaderInner}>
        <Box className={styles.HeaderContainer}>
          {/*
          <Flex
            align="center"
            pl={{ initial: "5", sm: "6" }}
            position="absolute"
            top="0"
            bottom="0"
            left="0"
          >
            <CommandMenu routes={commandMenuRoutes} /> 
          </Flex>
          */}

          <Flex
            display={{ initial: "flex", md: "none" }}
            align="center"
            pl={{ initial: "5", sm: "6" }}
            position="absolute"
            top="0"
            bottom="0"
            left="0"
          >
            <NextLink href={staticRoutes.home.slug} passHref legacyBehavior>
              <BoxLink ariaLabel="Homepage Link">
                <SiteLogoIcon aria-label="Site Logo Icon" />
              </BoxLink>
            </NextLink>
          </Flex>

          <Flex
            display={{ initial: "none", md: "flex" }}
            align="center"
            pl={{ initial: "5", sm: "6" }}
            position="absolute"
            top="0"
            bottom="0"
            left="0"
          >
            <NextLink href={staticRoutes.home.slug} passHref legacyBehavior>
              <BoxLink ariaLabel="Homepage Link">
                <SiteLogo aria-label="Site Logo" />
              </BoxLink>
            </NextLink>
          </Flex>

          {mainNavLinks && (
            <Box className={styles.HeaderMainNavContainer}>
              <HeaderMainNav pages={mainNavLinks} />
            </Box>
          )}

          <Flex
            align="center"
            gap="5"
            pr={{ initial: "5", sm: "6" }}
            position="absolute"
            top="0"
            bottom="0"
            right="0"
          >
            <Flex
              display={{ initial: "none", md: "flex" }}
              align="center"
              gap="5"
            >
              {children}
            </Flex>

            <Flex align="center" gap="5">
              <ThemeToggle />
            </Flex>
          </Flex>
        </Box>
      </nav>
    </HeaderShell>
  );
};
