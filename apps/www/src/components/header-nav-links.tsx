"use client";

import React from "react";
import { usePathname } from "next/navigation";

import type { Frontmatter } from "~/types/frontmatter";
import { NextLink } from "~/lib/link";
import styles from "./header.module.css";

interface HeaderNavLinksProps {
  pages: Frontmatter[];
}

export const HeaderNavLinks = ({
  pages,
}: HeaderNavLinksProps): React.JSX.Element => {
  const pathname: string = usePathname();

  return (
    <React.Fragment>
      {pages.map((page: Frontmatter): React.JSX.Element => {
        return (
          <HeaderNavLink
            key={page.slug}
            href={page.slug}
            active={
              (page.slug === "/" && pathname === page.slug) ||
              (page.slug !== "/" && pathname.startsWith(page.slug))
            }
          >
            {page.title}
          </HeaderNavLink>
        );
      })}
    </React.Fragment>
  );
};

const HeaderNavLink = ({
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
      className={styles.HeaderNavLink}
      {...props}
    >
      <span className={styles.HeaderNavLinkInner}>{children}</span>
      <span className={styles.HeaderNavLinkInnerHidden}>{children}</span>
    </a>
  </NextLink>
);
