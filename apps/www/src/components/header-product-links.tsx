"use client";

import React from "react";
import { usePathname } from "next/navigation";
import type { PropsWithoutRefOrColor } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import type { AppPage, AppRoute } from "~/lib/routes";
import styles from "./header.module.css";

interface HeaderProductLinksProps {
  route: AppRoute;
}

export const HeaderProductLinks = ({
  route,
}: HeaderProductLinksProps): React.JSX.Element => {
  const pathname: string = usePathname();

  return (
    <React.Fragment>
      {route.pages.map((page: AppPage): React.JSX.Element | null => {
        return page ? (
          <HeaderProductLink
            key={page.slug}
            href={page.slug}
            active={
              (page.slug === "/" && pathname === page.slug) ||
              (page.slug !== "/" && pathname.startsWith(page.slug))
            }
          >
            {page.title}
          </HeaderProductLink>
        ) : null;
      })}
    </React.Fragment>
  );
};

const HeaderProductLink = ({
  href = undefined,
  active = false,
  children = undefined,
  ...props
}: PropsWithoutRefOrColor<"a"> & {
  active?: boolean;
}): React.JSX.Element => (
  <NextLink href={href!} passHref legacyBehavior>
    <a
      data-state={active ? "active" : "inactive"}
      className={styles.HeaderProductLink}
      {...props}
    >
      <span className={styles.HeaderProductLinkInner}>{children}</span>
      <span className={styles.HeaderProductLinkInnerHidden}>{children}</span>
    </a>
  </NextLink>
);
