"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@radix-ui/themes";

import type { AllRoutes } from "~/lib/routes";

export const HeaderSideNav = ({
  allRoutes,
}: {
  allRoutes: AllRoutes;
}): React.JSX.Element => {
  const pathname: string = usePathname();

  return (
    <React.Fragment>
      <Link
        size="2"
        color="gray"
        href={allRoutes.blog.slug}
        highContrast={pathname.includes(allRoutes.blog.slug)}
      >
        Blog
      </Link>
      <Link
        size="2"
        color="gray"
        href={allRoutes.projects.slug}
        highContrast={pathname.includes(allRoutes.projects.slug)}
      >
        Projects
      </Link>
    </React.Fragment>
  );
};
