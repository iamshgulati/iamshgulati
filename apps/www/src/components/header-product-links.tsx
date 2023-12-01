"use client";

import React from "react";
import { usePathname } from "next/navigation";

import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";
import type { Page } from "~/types";
import styles from "./header.module.css";

const PRODUCT_LINKS_LIMIT = 4;

interface HeaderproductLinksProps {
  pages?: Page[];
}

export const HeaderProductLinks = ({
  pages = undefined,
}: HeaderproductLinksProps): React.JSX.Element | null => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      {pages?.length
        ? pages.slice(0, PRODUCT_LINKS_LIMIT).map((page) => (
            <HeaderProductLink
              key={page.slug}
              href={page.slug}
              active={
                pathname === "/" ||
                (pathname !== "/" && pathname.startsWith(page.slug))
              }
            >
              {page.title}
            </HeaderProductLink>
          ))
        : null}
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
