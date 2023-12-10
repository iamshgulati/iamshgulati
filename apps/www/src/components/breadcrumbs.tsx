"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Flex, Link, Text } from "@radix-ui/themes";

import type { NextLinkProps } from "~/lib/link";
import { NextLink } from "~/lib/link";

export const Breadcrumbs = ({
  rootLabel = "Home",
  omitRootLabel = false,
  omitCurrentLabel = false,
  section = undefined,
  ...props
}: React.ComponentPropsWithoutRef<typeof Flex> & {
  rootLabel?: string;
  omitRootLabel?: boolean;
  omitCurrentLabel?: boolean;
  section?: {
    label: string;
    href: string;
  };
}) => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  paths.shift();
  omitCurrentLabel && paths.pop();
  const breadcrumbs = paths.map((path, index) => {
    return {
      label: path,
      href: "/" + paths.slice(0, index + 1).join("/"),
    };
  });

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
        <Breadcrumb href="/" noChevron>
          {rootLabel}
        </Breadcrumb>
      )}

      {section && (
        <Breadcrumb href={`/${section.href}`}>{section.label}</Breadcrumb>
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
}: React.PropsWithChildren<NextLinkProps & { noChevron?: boolean }>) => (
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
