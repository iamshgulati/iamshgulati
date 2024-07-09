"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Flex, Link, Text } from "@radix-ui/themes";

import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";

interface BreadcrumbProps {
  label: string;
  href: string;
}

type BreadcrumbsProps = React.ComponentProps<typeof Flex> & {
  rootSlug: string;
  rootLabel?: string;
  omitRootLabel?: boolean;
  omitCurrentLabel?: boolean;
};

export const Breadcrumbs = ({
  rootSlug,
  rootLabel = "Home",
  omitRootLabel = false,
  omitCurrentLabel = false,
  ...props
}: BreadcrumbsProps): React.JSX.Element => {
  const pathname: string = usePathname();
  const paths: string[] = pathname.split("/");
  paths.shift();
  const _currentPage = omitCurrentLabel && paths.pop();
  const breadcrumbs: BreadcrumbProps[] = paths.map(
    (path: string, index: number): BreadcrumbProps => {
      return {
        label: path,
        href: rootSlug + paths.slice(0, index + 1).join("/"),
      };
    },
  );

  return (
    <Flex
      direction="row"
      align="center"
      justify="start"
      wrap="wrap"
      gap="2"
      {...props}
    >
      {!omitRootLabel && (
        <Breadcrumb href={rootSlug} noChevron>
          {rootLabel}
        </Breadcrumb>
      )}

      {breadcrumbs.map((breadcrumb) => {
        return (
          <Breadcrumb key={breadcrumb.href} href={breadcrumb.href}>
            {breadcrumb.label}
          </Breadcrumb>
        );
      })}
    </Flex>
  );
};

const Breadcrumb = ({
  href,
  noChevron = false,
  children = undefined,
}: React.PropsWithChildren<
  NextLinkProps & { noChevron?: boolean }
>): React.JSX.Element => (
  <React.Fragment>
    {!noChevron && <ChevronRightIcon color="var(--gray-8)" />}
    <NextLink href={href} passHref legacyBehavior>
      <Link>
        <Text
          size={{ initial: "2", xs: "3" }}
          weight="medium"
          style={{ textTransform: "capitalize" }}
        >
          {children}
        </Text>
      </Link>
    </NextLink>
  </React.Fragment>
);
