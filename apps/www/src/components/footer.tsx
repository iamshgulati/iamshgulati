import React from "react";
import { AccessibleIcon, Flex, IconButton, Link, Text } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";
import type { AppPage } from "~/lib/routes";
import type { Icon } from "./icons";
import { Icons } from "./icons";

interface FooterProps {
  pages: AppPage[];
}

export function Footer({ pages }: FooterProps): React.JSX.Element {
  return (
    <Flex
      asChild
      pb="9"
      align="center"
      justify="center"
      direction="column"
      gap="5"
    >
      <footer>
        <Flex gap="5">
          {pages.map((page) => (
            <SocialIconButton
              key={page.slug}
              href={page.slug}
              icon={page.icon}
              label={page.title}
            />
          ))}
        </Flex>
        <Text size="1" color="gray">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </Text>
      </footer>
    </Flex>
  );
}

const SocialIconButton = ({
  href,
  icon = "AtSymbolIcon",
  label,
}: {
  href: string;
  icon?: keyof typeof Icons;
  label: string;
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
        <AccessibleIcon label={label}>
          <SocialIcon width="16" height="16" />
        </AccessibleIcon>
      </IconButton>
    </Link>
  );
};
