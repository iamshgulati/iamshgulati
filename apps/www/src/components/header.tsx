import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import { AllFrontmatter } from "~/lib/mdx-frontmatter";
import { cn } from "~/lib/utils";
import { BoxLink } from "./box-link";
import { CommandMenu } from "./command-menu";
import { HeaderProductLinks } from "./header-product-links";
import { HeaderShell } from "./header-shell";
import styles from "./header.module.css";
import { SiteLogo } from "./site-logo";

export interface HeaderProps {
  sticky?: boolean;
  ghost?: boolean;
  isMobileMenuOpen?: boolean;
}

export function Header({
  children = undefined,
  sticky = false,
  ghost = false,
  isMobileMenuOpen = false,
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
            <CommandMenu frontmatter={AllFrontmatter} />
            <Flex
              display={{ initial: "flex", md: "none" }}
              align="center"
              gap="5"
            >
              <IconButton
                size="3"
                variant="ghost"
                color="gray"
                data-state={isMobileMenuOpen ? "open" : "closed"}
                // onClick={() => mobileMenu.setOpen((open) => !open)}
              >
                <HamburgerMenuIcon width="16" height="16" />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </nav>
    </HeaderShell>
  );
}
