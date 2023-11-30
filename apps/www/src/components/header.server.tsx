import React from "react";
import { Box, Flex } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import { FrontmatterData } from "~/lib/mdx-frontmatter";
import { cn } from "~/lib/utils";
import { BoxLink } from "./box-link";
import { CommandMenu } from "./command-menu";
import { HeaderProductLinks } from "./header-product-links";
import { HeaderRoot } from "./header.client";
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
  return (
    <HeaderRoot
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
            display={{ initial: "flex", xs: "none" }}
            align="center"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            pl={{ initial: "5", sm: "6" }}
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
            pl={{ initial: "5", sm: "6" }}
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
            <CommandMenu frontmatter={FrontmatterData} />
          </Flex>
        </Box>
      </nav>
    </HeaderRoot>
  );
}

const HeaderLogoLink = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => (
  <NextLink href="/" passHref legacyBehavior>
    <BoxLink ariaLabel={`${siteConfig.name}'s Homepage`}>{children}</BoxLink>
  </NextLink>
);
