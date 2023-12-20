import React from "react";
import { Box, Flex } from "@radix-ui/themes";

import { cn } from "~/lib/classnames";
import { NextLink } from "~/lib/link";
import type { AppRoute } from "~/lib/routes";
import { BoxLink } from "./box-link";
import { CommandMenu } from "./command-menu";
import { HeaderProductLinks } from "./header-product-links";
import { HeaderShell } from "./header-shell";
import styles from "./header.module.css";
import { SiteLogo, SiteLogoIcon } from "./site-logo";

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
                <SiteLogoIcon color="gray" aria-label="Site Logo Icon" />
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
                <SiteLogo color="gray" aria-label="Site Logo" />
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
};

/*
const _LinkSocialIconButton = ({
  href,
  icon = "Link2Icon",
  ariaLabel,
}: {
  href: string;
  icon?: keyof typeof Icons;
  ariaLabel: string;
}): React.JSX.Element => {
  const SocialIcon: Icon = Icons[icon];

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
          <SocialIcon aria-label={ariaLabel} width="16" height="16" />
      </IconButton>
    </Link>
  );
};
 */
