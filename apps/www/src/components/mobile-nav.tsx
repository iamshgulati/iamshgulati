"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge, Box, Flex, Heading, Link, Text } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import { getBadgeColor } from "~/lib/theme";
import { cn } from "~/lib/utils";
import type { AppRoute } from "~/types";
import type { Icon } from "./icons";
import { Icons } from "./icons";
import styles from "./mobile-nav.module.css";

interface MobileNavProps {
  routes: AppRoute[];
}

export const MobileNav = ({ routes }: MobileNavProps): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <Box>
      {routes.map((section, index) => (
        <Box key={section.label ?? index} mb="4">
          {section.label && (
            <Box py="2" px="3">
              <Heading as="h4" size={{ initial: "3", md: "2" }}>
                {section.label}
              </Heading>
            </Box>
          )}

          {section.pages?.map((page) => {
            const PageIcon: Icon | undefined = page.icon && Icons[page.icon];
            return (
              <MobileNavItem
                key={page.slug}
                href={page.slug}
                active={pathname === page.slug}
              >
                <Flex display="flex" align="center" gap="3">
                  {PageIcon && <PageIcon width="16" height="16" />}
                  {/* initial size = 3 for mobile menu; md size = 2 for sidebar menu */}
                  <Text size={{ initial: "3", md: "2" }}>{page.title}</Text>
                  {page.label && (
                    <Badge radius="full" color={getBadgeColor(page.label)}>
                      {page.label}
                    </Badge>
                  )}
                </Flex>
              </MobileNavItem>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

interface MobileNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  className?: string;
}

const MobileNavItem = ({
  active = false,
  disabled = false,
  href,
  className = undefined,
  ...props
}: MobileNavItemProps): React.JSX.Element => {
  const classNames = cn(
    className,
    styles.MobileNavItem,
    active && styles.active,
  );
  const isExternal = href.startsWith("http");

  if (disabled) {
    return (
      <Text
        size={{ initial: "3", md: "2" }}
        className={classNames}
        style={{
          cursor: "var(--cursor-disabled)",
        }}
        {...props}
      />
    );
  }

  if (isExternal) {
    return (
      <Flex display="flex" align="center">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          size={{ initial: "3", md: "2" }}
          highContrast={active}
          className={classNames}
          {...props}
        />
        <ArrowTopRightIcon
          aria-hidden
          width="16"
          height="16"
          style={{ color: "var(--gray-8)" }}
        />
      </Flex>
    );
  }

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        size={{ initial: "3", md: "2" }}
        highContrast={active}
        className={classNames}
        {...props}
      />
    </NextLink>
  );
};
