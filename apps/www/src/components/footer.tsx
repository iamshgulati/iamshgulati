import React from "react";
import { Flex, Text } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";
import { siteConfig } from "~/config/site";
import { LinkSocialIconButton } from "./link-social-icon-button";

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
