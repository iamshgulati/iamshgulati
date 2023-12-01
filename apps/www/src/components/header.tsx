import React from "react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import { cn } from "~/lib/utils";
import { BoxLink } from "./box-link";
import { HeaderProductLinks } from "./header-product-links";
import { HeaderShell } from "./header-shell";
import styles from "./header.module.css";
import { MobileMenuTrigger } from "./mobile-menu";
import { SiteLogo } from "./site-logo";

export interface HeaderProps {
  sticky?: boolean;
  ghost?: boolean;
  commandMenu?: React.ReactNode;
}

export function Header({
  children = undefined,
  sticky = false,
  ghost = false,
  commandMenu = undefined,
}: React.PropsWithChildren<HeaderProps>): React.JSX.Element {
  return (
    <HeaderShell
      ghost={ghost}
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

          <Box className={styles.HeaderProductLinksContainer}>
            <HeaderProductLinks />
          </Box>

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

            <Box asChild display={{ initial: "block", md: "none" }}>
              <MobileMenuTrigger>
                <IconButton
                  size="3"
                  variant="ghost"
                  color="gray"
                  className={styles.MobileMenuTrigger}
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
            </Box>
          </Flex>
        </Box>
      </nav>
    </HeaderShell>
  );
}
