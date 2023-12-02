import React from "react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import { cn } from "~/lib/utils";
import type { AppRoute } from "~/types";
import { BoxLink } from "./box-link";
import { HeaderProductLinks } from "./header-product-links";
import { HeaderShell } from "./header-shell";
import styles from "./header.module.css";
import { MobileMenuTrigger } from "./mobile-menu-shell";
import { SiteLogo } from "./site-logo";

export interface HeaderProps {
  sticky?: boolean;
  ghost?: boolean;
  commandMenu?: React.ReactNode;
  productLinkRoutes?: AppRoute[];
}

export function Header({
  children = undefined,
  sticky = false,
  ghost = false,
  productLinkRoutes = undefined,
  commandMenu = undefined,
}: React.PropsWithChildren<HeaderProps>): React.JSX.Element {
  return (
    <HeaderShell
      ghost={ghost}
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
            align="center"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            pl={{ initial: "5", sm: "6" }}
          >
            <NextLink href="/" passHref legacyBehavior>
              <BoxLink ariaLabel={`${siteConfig.name}'s Homepage`}>
                <SiteLogo />
              </BoxLink>
            </NextLink>
          </Flex>

          {productLinkRoutes && (
            <Box className={styles.HeaderProductLinksContainer}>
              <HeaderProductLinks routes={productLinkRoutes} />
            </Box>
          )}

          <Flex
            align="center"
            gap="5"
            position="absolute"
            top="0"
            bottom="0"
            right="0"
            pr={{ initial: "5", sm: "6" }}
          >
            <Flex
              display={{ initial: "none", md: "flex" }}
              align="center"
              gap="5"
            >
              {children}
            </Flex>

            {commandMenu}

            <Flex
              display={{ initial: "inline-flex", md: "none" }}
              align="center"
            >
              <MobileMenuTrigger className={styles.MobileMenuTrigger}>
                <IconButton
                  size="3"
                  variant="ghost"
                  color="gray"
                  className={styles.MobileMenuButton}
                >
                  <AccessibleIcon label="Open Mobile Menu">
                    <HamburgerMenuIcon
                      width="16"
                      height="16"
                      style={{
                        display: "var(--state-closed-icon-display)",
                      }}
                    />
                  </AccessibleIcon>
                  <AccessibleIcon label="Close Mobile Menu">
                    <Cross2Icon
                      width="16"
                      height="16"
                      style={{
                        display: "var(--state-open-icon-display)",
                      }}
                    />
                  </AccessibleIcon>
                </IconButton>
              </MobileMenuTrigger>
            </Flex>
          </Flex>
        </Box>
      </nav>
    </HeaderShell>
  );
}
