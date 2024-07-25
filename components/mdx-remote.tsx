import React from "react";
import { Badge, Button, Flex, Grid, Link, Quote, Text } from "@radix-ui/themes";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Icons } from "~/components/icons";
import { A } from "~/components/mdx/a";
import { BadgeWithIndicator } from "~/components/mdx/badge-with-indicator";
import { Blockquote } from "~/components/mdx/blockquote";
import { Callout } from "~/components/mdx/callout";
import { Code } from "~/components/mdx/code";
import { CodeBlock } from "~/components/mdx/code-block";
import { Em } from "~/components/mdx/em";
import { H1 } from "~/components/mdx/h1";
import { H2 } from "~/components/mdx/h2";
import { H3 } from "~/components/mdx/h3";
import { H4 } from "~/components/mdx/h4";
import { H5 } from "~/components/mdx/h5";
import { H6 } from "~/components/mdx/h6";
import { Hr } from "~/components/mdx/hr";
import { Img } from "~/components/mdx/img";
import { Li } from "~/components/mdx/li";
import { Ol } from "~/components/mdx/ol";
import { P } from "~/components/mdx/p";
import { PreWithCopyButton } from "~/components/mdx/pre-with-copy-button";
import { HStack, VStack } from "~/components/mdx/stacks";
import { Strong } from "~/components/mdx/strong";
import {
  Table,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "~/components/mdx/table";
import { Ul } from "~/components/mdx/ul";
import { getMatter } from "~/lib/mdx";

export async function getMDXComponent({ slug }: { slug: string }) {
  const defaultComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    a: A,
    hr: Hr,
    ul: Ul,
    ol: Ol,
    li: Li,
    em: Em,
    strong: Strong,
    img: Img,
    blockquote: Blockquote,
    pre: PreWithCopyButton,
    code: Code,
    table: TableRoot,
    thead: TableHeader,
    tbody: TableBody,
    th: TableColumnHeaderCell,
    tr: TableRow,
    td: TableCell,
  };

  const themesComponents = {
    ...Icons,
    Link,
    Quote,
    Text,
    Button,
    Flex,
    Grid,
    Badge,
  };

  const customComponents = {
    Callout,
    Table,
    HStack,
    VStack,
    BadgeWithIndicator,
    CodeBlock,
  };

  let components: Record<string, React.JSX.Element> = {};
  try {
    components = (await import(`../public${slug}/components.tsx`)) as Record<
      string,
      React.JSX.Element
    >;
  } catch (error) {
    // @ts-expect-error unknown type
    if (!error || error.code !== "MODULE_NOT_FOUND") {
      throw error;
    }
  }

  const { content } = await getMatter({ slug });

  return (
    <MDXRemote
      source={content}
      components={{
        ...defaultComponents,
        ...themesComponents,
        ...customComponents,
        ...components,
      }}
      options={{
        mdxOptions: {
          useDynamicImport: true,
          // remarkPlugins: [[remarkMdxEvalCodeBlock, filename]],
          // rehypePlugins: [
          //   [
          //     rehypePrettyCode,
          //     {
          //       theme: overnight,
          //     },
          //   ],
          // ],
        },
      }}
    />
  );
}
