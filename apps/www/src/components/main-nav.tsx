"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge, Flex, Link, Text } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import { getBadgeColor } from "~/lib/theme";
import type { Page } from "~/types";
import type { Icon } from "./icons";
import { Icons } from "./icons";

interface MainNavProps {
  pages?: Page[];
}

export function MainNav({
  pages = undefined,
}: MainNavProps): React.JSX.Element[] | null {
  const pathname = usePathname();

  return pages?.length
    ? pages.map((page) => {
        const PageIcon: Icon | undefined = page.icon && Icons[page.icon];
        return (
          <MainNavItem
            key={page.slug}
            href={page.slug}
            disabled={page.disabled}
            active={pathname === page.slug}
          >
            <Flex display="inline-flex" align="center" gap="2">
              {PageIcon && <PageIcon width="16" height="16" />}
              {/* initial size = 3 for mobile menu; md size = 2 for sidebar menu */}
              <Text size={{ initial: "3", md: "2" }}>{page.title}</Text>
              {page.label && (
                <Badge radius="full" color={getBadgeColor(page.label)}>
                  {page.label}
                </Badge>
              )}
            </Flex>
          </MainNavItem>
        );
      })
    : null;
}

interface MainNavItemProps {
  href: string;
  disabled?: boolean;
  active?: boolean;
  className?: string;
}

const MainNavItem = ({
  href,
  disabled = false,
  active = false,
  className = undefined,
  ...props
}: React.PropsWithChildren<MainNavItemProps>): React.JSX.Element => {
  const isExternal = href.startsWith("http");

  if (disabled) {
    return (
      <Text
        size={{ initial: "3", md: "2" }}
        color="gray"
        className={className}
        style={{
          cursor: "var(--cursor-disabled)",
        }}
        {...props}
      />
    );
  }

  if (isExternal) {
    return (
      <Flex display="inline-flex" align="center" gap="2">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          size={{ initial: "3", md: "2" }}
          color="gray"
          highContrast={active}
          className={className}
          {...props}
        />
        <ArrowTopRightIcon aria-hidden style={{ color: "var(--gray-8)" }} />
      </Flex>
    );
  }

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        size={{ initial: "3", md: "2" }}
        color="gray"
        highContrast={active}
        className={className}
        {...props}
      />
    </NextLink>
  );
};
