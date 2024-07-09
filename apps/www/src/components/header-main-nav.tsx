"use client";

import React from "react";
import { usePathname } from "next/navigation";

import type { Frontmatter } from "~/types/frontmatter";
import { NextLink } from "~/lib/link";
import styles from "./header.module.css";

interface HeaderMainNavProps {
  pages: Frontmatter[];
}

export const HeaderMainNav = ({
  pages,
}: HeaderMainNavProps): React.JSX.Element => {
  const pathname: string = usePathname();

  return (
    <React.Fragment>
      {pages.map((page: Frontmatter): React.JSX.Element => {
        return (
          <HeaderMainNavLink
            key={page.slug}
            href={page.slug}
            active={
              (page.slug === "/" && pathname === page.slug) ||
              (page.slug !== "/" && pathname.startsWith(page.slug))
            }
          >
            {page.title}
          </HeaderMainNavLink>
        );
      })}
    </React.Fragment>
  );
};

const HeaderMainNavLink = ({
  href = undefined,
  active = false,
  children = undefined,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  active?: boolean;
}): React.JSX.Element => (
  <NextLink href={href ? href : "#"} passHref legacyBehavior>
    <a
      data-state={active ? "active" : "inactive"}
      className={styles.HeaderMainNavLink}
      {...props}
    >
      <span className={styles.HeaderMainNavLinkInner}>{children}</span>
      <span className={styles.HeaderMainNavLinkInnerHidden}>{children}</span>
    </a>
  </NextLink>
);
