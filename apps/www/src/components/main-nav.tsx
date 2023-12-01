"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge, Flex, Link, Text } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import { getBadgeColor } from "~/lib/theme";
import type { NavItem } from "~/types";
import type { Icon } from "./icons";
import { Icons } from "./icons";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({
  items = [],
}: MainNavProps): React.JSX.Element[] | null {
  const pathname = usePathname();

  return items.map((item) => {
    const ItemIcon: Icon | undefined = item.icon && Icons[item.icon];
    return (
      <MainNavItem
        key={item.slug}
        href={item.slug}
        disabled={item.disabled}
        active={pathname === item.slug}
      >
        <Flex display="inline-flex" align="center" gap="2">
          {ItemIcon && <ItemIcon width="16" height="16" />}
          {/* initial size = 3 for mobile menu; md size = 2 for sidebar menu */}
          <Text size={{ initial: "3", md: "2" }}>{item.title}</Text>
          {item.label && (
            <Badge radius="full" color={getBadgeColor(item.label)}>
              {item.label}
            </Badge>
          )}
        </Flex>
      </MainNavItem>
    );
  });
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
