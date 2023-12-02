"use client";

import React from "react";
import { usePathname } from "next/navigation";

import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";
import type { Route } from "~/lib/routes";
import styles from "./header.module.css";

interface HeaderproductLinksProps {
  routes: Route[];
}

export const HeaderProductLinks = ({
  routes,
}: HeaderproductLinksProps): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      {routes.map((section, index) => {
        const sectionSlug = section.pages.at(0)?.slug;
        return sectionSlug ? (
          <HeaderProductLink
            key={section.label ?? index}
            href={sectionSlug}
            active={section.pages.some(
              (page) =>
                (page.slug === "/" && pathname === page.slug) ||
                (page.slug !== "/" && pathname.startsWith(page.slug)),
            )}
          >
            {section.label}
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
