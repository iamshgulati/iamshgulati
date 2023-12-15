import React from "react";
import { AccessibleIcon, Box, Flex, IconButton, Link } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import type { AppRoute } from "~/lib/routes";
import { cn } from "~/lib/utils";
import { BoxLink } from "./box-link";
import { CommandMenu } from "./command-menu";
import { HeaderProductLinks } from "./header-product-links";
import { HeaderShell } from "./header-shell";
import styles from "./header.module.css";
import type { Icon } from "./icons";
import { Icons } from "./icons";
import { SiteLogo, SiteLogoIcon } from "./site-logo";

export interface HeaderProps {
  sticky?: boolean;
  scrollHeightFactorThreshold?: number;
  scrollDelay?: number;
  ghost?: boolean;
  autoHide?: boolean;
  backdrop?: boolean;
  backdropExtended?: boolean;
  productLinkRoute?: AppRoute;
  commandMenuRoutes?: AppRoute[];
}

export function Header({
  sticky = false,
  ghost = false,
  autoHide = false,
  backdrop = false,
  backdropExtended = false,
  scrollHeightFactorThreshold = undefined,
  scrollDelay = undefined,
  productLinkRoute = undefined,
  commandMenuRoutes = undefined,
  children = undefined,
}: React.PropsWithChildren<HeaderProps>): React.JSX.Element {
  return (
    <HeaderShell
      scrollHeightFactorThreshold={scrollHeightFactorThreshold}
      scrollDelay={scrollDelay}
      className={cn(
        styles.HeaderRoot,
        sticky ? styles.sticky : "",
        ghost ? styles.ghost : "",
        autoHide ? styles.autoHide : "",
        backdrop ? styles.backdrop : "",
        backdropExtended ? styles.backdropExtended : "",
      )}
    >
      <nav className={styles.HeaderInner}>
        <Box className={styles.HeaderContainer}>
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
              <BoxLink ariaLabel={`${siteConfig.name}'s Homepage`}>
                <SiteLogoIcon />
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
              <BoxLink ariaLabel={`${siteConfig.name}'s Homepage`}>
                <SiteLogo />
              </BoxLink>
            </NextLink>
          </Flex>

          {productLinkRoute && (
            <Box className={styles.HeaderProductLinksContainer}>
              <HeaderProductLinks route={productLinkRoute} />
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

            <Flex align="center">
              <CommandMenu routes={commandMenuRoutes} />
            </Flex>
          </Flex>
        </Box>
      </nav>
    </HeaderShell>
  );
}

const _SocialIconButton = ({
  icon = "AtSymbolIcon",
  href,
}: {
  icon?: keyof typeof Icons;
  href: string;
}): React.JSX.Element => {
  const SocialIcon: Icon = Icons[icon];
  const SocialNetwork = icon.replace("Logo", "").replace("Icon", "");

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <IconButton size="3" variant="ghost" color="gray">
        <AccessibleIcon label={SocialNetwork}>
          <SocialIcon width="16" height="16" />
        </AccessibleIcon>
      </IconButton>
    </Link>
  );
};
