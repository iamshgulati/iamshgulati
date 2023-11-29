// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import { Link2Icon } from "@radix-ui/react-icons";
import {
  Blockquote,
  Box,
  Code,
  Em,
  Flex,
  Heading,
  Link,
  Separator,
  Strong,
  Table,
  Text,
} from "@radix-ui/themes";
import type { MDXComponents } from "mdx/types";

import { PreWithCopyButton } from "~/components/pre-with-copy-button";
import { NextLink } from "~/lib/link";
import { cn } from "~/lib/utils";
import styles from "./mdx-components.module.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ className, ...props }): React.JSX.Element => (
      <Heading
        as="h1"
        size="8"
        mb="6"
        {...props}
        className={cn(className, styles.H)}
      />
    ),
    h2: ({ id = "", children, className, ...props }): React.JSX.Element => (
      <Heading
        as="h2"
        size="6"
        mt="7"
        mb="2"
        id={id}
        {...props}
        className={cn(className, styles.H, styles.H2)}
        data-heading
      >
        <HeadingLink id={id}>{children}</HeadingLink>
      </Heading>
    ),
    h3: ({ id = "", children, className, ...props }): React.JSX.Element => (
      <Heading
        as="h3"
        size="5"
        mt="7"
        mb="2"
        id={id}
        {...props}
        className={cn(className, styles.H)}
        data-heading
      >
        <HeadingLink id={id}>{children}</HeadingLink>
      </Heading>
    ),
    h4: ({ className, ...props }): React.JSX.Element => (
      <Heading
        as="h4"
        size="4"
        mt="6"
        mb="3"
        {...props}
        className={cn(className, styles.H)}
      />
    ),
    h5: ({ className, ...props }): React.JSX.Element => (
      <Heading
        as="h5"
        size="4"
        mt="6"
        mb="3"
        {...props}
        className={cn(className, styles.H)}
      />
    ),
    h6: ({ className, ...props }): React.JSX.Element => (
      <Heading
        as="h6"
        size="3"
        mt="4"
        mb="1"
        {...props}
        className={cn(className, styles.H)}
      />
    ),
    p: ({ className, ...props }): React.JSX.Element => (
      <Text as="p" mb="3" size="3" {...props} className={className} />
    ),
    a: ({ href = "", className, ...props }): React.JSX.Element => {
      if (href.startsWith("http")) {
        return (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
            className={cn(className, styles.Link)}
          >
            {props.children}
          </Link>
        );
      }

      return (
        <NextLink href={href} passHref legacyBehavior>
          <Link {...props} className={className} />
        </NextLink>
      );
    },
    hr: ({ className, ...props }): React.JSX.Element => (
      <Separator
        size="2"
        my="6"
        {...props}
        className={className}
        style={{ marginInline: "auto" }}
      />
    ),
    ul: ({ className, ...props }): React.JSX.Element => (
      <Flex asChild direction="column" gap="1" mb="3">
        <ul {...props} className={cn(className, styles.List)} />
      </Flex>
    ),
    ol: ({ className, ...props }): React.JSX.Element => (
      <Box asChild mb="3">
        <ol {...props} className={cn(className, styles.List)} />
      </Box>
    ),
    li: ({ className, ...props }): React.JSX.Element => (
      <li className={styles.ListItem}>
        <Text as="span" {...props} className={className} />
      </li>
    ),
    em: ({ ...props }): React.JSX.Element => <Em {...props} />,
    strong: ({ ...props }): React.JSX.Element => <Strong {...props} />,
    img: ({ alt = "", className, ...props }): React.JSX.Element => (
      <Box my="6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...props}
          alt={alt}
          className={className}
          style={{
            maxWidth: "100%",
            verticalAlign: "middle",
            borderRadius: "var(--radius-4)",
          }}
        />
      </Box>
    ),
    blockquote: ({ className, ...props }): React.JSX.Element => (
      <Blockquote
        {...props}
        my="6"
        className={cn(className, styles.Blockquote)}
        style={{
          fontStyle: "italic",
        }}
      />
    ),
    pre: ({ ...props }): React.JSX.Element => <PreWithCopyButton {...props} />,
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
      const isInlineCode = !className;
      return isInlineCode ? (
        <Code {...props} className={className} />
      ) : (
        <code {...props} className={className} />
      );
    },
    table: ({ ...props }) => <Table.Root variant="surface" my="5" {...props} />,
    thead: ({ ...props }) => <Table.Header {...props} />,
    tbody: ({ ...props }) => <Table.Body {...props} />,
    th: ({ ...props }) => <Table.ColumnHeaderCell {...props} />,
    trh: ({ ...props }) => <Table.RowHeaderCell {...props} />,
    tr: ({ ...props }) => <Table.Row {...props} />,
    td: ({ ...props }) => <Table.Cell {...props} />,
  };
}

const HeadingLink = ({
  id,
  children,
  className,
  ...props
}: React.PropsWithChildren<{
  id: string;
}> &
  React.ComponentProps<typeof Link>): React.JSX.Element => (
  <Link
    id={id}
    href={`#${id}`}
    weight="bold"
    color="gray"
    highContrast
    underline="hover"
    {...props}
    className={cn(className, styles.HeadingLink)}
  >
    {children}
    <Link2Icon aria-hidden />
  </Link>
);
