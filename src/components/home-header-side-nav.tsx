"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@radix-ui/themes";

import type { AllRoutes } from "~/lib/routes";
import { NextLink } from "~/lib/link";

export const HomeHeaderSideNav = ({
  allRoutes,
}: {
  allRoutes: AllRoutes;
}): React.JSX.Element => {
  const pathname: string = usePathname();

  return (
    <React.Fragment>
      <NextLink href={allRoutes.work.slug} passHref legacyBehavior>
        <Link
          size="2"
          color="gray"
          highContrast={pathname.includes(allRoutes.work.slug)}
        >
          Work
        </Link>
      </NextLink>
      <NextLink href={allRoutes.blog.slug} passHref legacyBehavior>
        <Link
          size="2"
          color="gray"
          highContrast={pathname.includes(allRoutes.blog.slug)}
        >
          Blog
        </Link>
      </NextLink>
      <NextLink href={allRoutes.projects.slug} passHref legacyBehavior>
        <Link
          size="2"
          color="gray"
          highContrast={pathname.includes(allRoutes.projects.slug)}
        >
          Projects
        </Link>
      </NextLink>
    </React.Fragment>
  );
};
