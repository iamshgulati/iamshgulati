"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import type { NavItem } from "~/types";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({
  items = [],
}: MainNavProps): React.JSX.Element[] | null {
  const pathname = usePathname();

  return items.length
    ? items.map((item, index) => (
        <NextLink key={index} href={item.href} passHref legacyBehavior>
          <Link
            size="2"
            color="gray"
            highContrast={pathname.startsWith(item.href)}
          >
            {item.title}
          </Link>
        </NextLink>
      ))
    : null;
}
