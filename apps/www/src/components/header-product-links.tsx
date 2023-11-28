"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { navConfig } from "~/config/nav";
import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";
import styles from "./header.module.css";

export const HeaderProductLinks = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <HeaderProductLink
        href="/"
        active={
          pathname === "/" ||
          ["/about", "/thoughts", "/quotes", "/contact"].some((href) =>
            pathname.startsWith(href),
          )
        }
      >
        Home
      </HeaderProductLink>
      {navConfig.mainNavItems.map((item) => (
        <HeaderProductLink
          key={item.href}
          href={item.href}
          active={
            !["/"].includes(item.href) &&
            (pathname === item.href || pathname.startsWith(item.href))
          }
        >
          {item.title}
        </HeaderProductLink>
      ))}
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
