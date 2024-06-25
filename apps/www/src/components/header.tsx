import React from "react";
import { Box, Flex } from "@radix-ui/themes";

import type { AppRoute } from "~/lib/routes";
import { cn } from "~/lib/classnames";
import { CommandMenu } from "./command-menu";
import { HeaderProductLinks } from "./header-product-links";
import { HeaderShell } from "./header-shell";
import styles from "./header.module.css";
import { ThemeToggle } from "./theme-toggle";

export interface HeaderProps {
  sticky?: boolean;
  ghost?: boolean;
  autoHide?: boolean;
  viewportScrollFactorThreshold?: number;
  scrollDistanceThreshold?: number;
  backdrop?: boolean;
  backdropExtended?: boolean;
  productLinkRoute?: AppRoute;
  commandMenuRoutes?: AppRoute[];
}

export const Header = ({
  sticky = false,
  ghost = false,
  autoHide = false,
  viewportScrollFactorThreshold = undefined,
  scrollDistanceThreshold = undefined,
  backdrop = false,
  backdropExtended = false,
  productLinkRoute = undefined,
  commandMenuRoutes = undefined,
  children = undefined,
}: React.PropsWithChildren<HeaderProps>): React.JSX.Element => {
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
          <Flex
            align="center"
            pl={{ initial: "5", sm: "6" }}
            position="absolute"
            top="0"
            bottom="0"
            left="0"
          >
            <ThemeToggle iconProps={{ width: "20", height: "20" }} />
          </Flex>

          {/* 
          <Flex
            display={{ initial: "flex", md: "none" }}
            align="center"
            pl={{ initial: "5", sm: "6" }}
            position="absolute"
            top="0"
            bottom="0"
            left="0"
          >
            <NextLink href="/" passHref legacyBehavior>
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
            <NextLink href="/" passHref legacyBehavior>
              <BoxLink ariaLabel="Homepage Link">
                <SiteLogo aria-label="Site Logo" />
              </BoxLink>
            </NextLink>
          </Flex>
          */}

          {productLinkRoute && (
            <Box className={styles.HeaderProductLinksContainer}>
              <HeaderProductLinks route={productLinkRoute} limit={4} />
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

            <Flex align="center" gap={{ initial: "4", md: "5" }}>
              <CommandMenu
                routes={commandMenuRoutes}
                iconProps={{ width: "20", height: "20" }}
              />
            </Flex>
          </Flex>
        </Box>
      </nav>
    </HeaderShell>
  );
};
