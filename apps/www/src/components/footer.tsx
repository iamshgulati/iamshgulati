import React from "react";
import { Flex, IconButton, Link, Text } from "@radix-ui/themes";

import type { Icon } from "./icons";
import type { Frontmatter } from "~/types/frontmatter";
import { siteConfig } from "~/config/site";
import { Icons } from "./icons";

interface FooterProps {
  pages: Frontmatter[];
}

export const Footer = ({ pages }: FooterProps): React.JSX.Element => {
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
          {pages.map((page: Frontmatter) => (
            <LinkSocialIconButton
              key={page.slug}
              href={page.slug}
              icon={page.icon}
              ariaLabel={page.title}
            />
          ))}
        </Flex>
        <Text size="1" color="gray">
          &copy; {new Date().getFullYear()} {siteConfig.title}. All rights
          reserved.
        </Text>
      </footer>
    </Flex>
  );
};

const LinkSocialIconButton = ({
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
