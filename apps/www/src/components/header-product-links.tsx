"use client";

import React from "react";
import { usePathname } from "next/navigation";

import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";
import type { AppRoute } from "~/lib/routes";
import styles from "./header.module.css";

interface HeaderProductLinksProps {
  route: AppRoute;
}

export const HeaderProductLinks = ({
  route,
}: HeaderProductLinksProps): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      {route.pages.map((page) => {
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
  active = false,
  children,
  href,
  ...props
}: React.PropsWithChildren<NextLinkProps> & {
  active?: boolean;
}): React.JSX.Element => (
  <NextLink href={href} passHref legacyBehavior>
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
