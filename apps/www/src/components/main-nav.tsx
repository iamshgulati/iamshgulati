"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge, Flex, Link, Text } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import type { Route } from "~/lib/routes";
import { getBadgeColor } from "~/lib/theme";

interface MainNavProps {
  route: Route;
}

export function MainNav({ route }: MainNavProps): React.JSX.Element[] {
  const pathname = usePathname();

  return route.pages.map((page) => {
    return (
      <MainNavItem
        key={page.slug}
        href={page.slug}
        disabled={page.disabled}
        active={pathname === page.slug}
      >
        <Flex display="inline-flex" align="center" gap="2">
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
      <Flex display="flex" align="center" gap="2">
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
