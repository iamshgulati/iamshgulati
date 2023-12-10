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
  ghost?: boolean;
  productLinkRoute?: AppRoute;
  commandMenuRoutes?: AppRoute[];
}

export function Header({
  children = undefined,
  sticky = false,
  ghost = false,
  productLinkRoute = undefined,
  commandMenuRoutes = undefined,
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
            display={{ initial: "flex", md: "none" }}
            align="center"
            pl={{ initial: "5", sm: "6" }}
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

          <Flex align="center" gap="5" pr={{ initial: "5", sm: "6" }}>
            <Flex
              display={{ initial: "none", md: "flex" }}
              align="center"
              gap="5"
            >
              {children}
            </Flex>

            <Box className={styles.HeaderCommandMenuContainer}>
              <CommandMenu routes={commandMenuRoutes} />
            </Box>
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
      rel="noopener noreferrer"
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
