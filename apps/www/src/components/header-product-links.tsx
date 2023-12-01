"use client";

import React from "react";
import { usePathname } from "next/navigation";

import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";
import styles from "./header.module.css";

export const HeaderProductLinks = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <HeaderProductLink href="/" active={pathname === "/"}>
        Home
      </HeaderProductLink>
      <HeaderProductLink href="/blog" active={pathname.startsWith("/blog")}>
        Blog
      </HeaderProductLink>
      <HeaderProductLink
        href="/projects"
        active={pathname.startsWith("/projects")}
      >
        Projects
      </HeaderProductLink>
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
