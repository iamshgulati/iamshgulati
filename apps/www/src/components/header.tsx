"use client";

import React from "react";
import { Box, Flex } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import { useOnScroll } from "~/hooks/useOnScroll";
import { NextLink } from "~/lib/link";
import { cn } from "~/lib/utils";
import { BoxLink } from "./box-link";
import { HeaderProductLinks } from "./header-product-links";
import styles from "./header.module.css";
import { SiteLogo } from "./site-logo";

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
            pl={{ initial: "5", sm: "6" }}
          >
            <NextLink href="/" passHref legacyBehavior>
              <BoxLink ariaLabel={`${siteConfig.name}'s Homepage`}>
                {/* {mobileMenu.open ? <SiteLogoIcon /> : <SiteLogo />} */}
                <SiteLogo />
              </BoxLink>
            </NextLink>
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
            {children}
          </Flex>
        </Box>
      </nav>
    </Box>
  );
}
