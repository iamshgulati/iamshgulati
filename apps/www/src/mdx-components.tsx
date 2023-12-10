import type { MDXComponents } from "mdx/types";

import { A } from "~/components/mdx/a";
import { Blockquote } from "~/components/mdx/blockquote";
import { Code } from "~/components/mdx/code";
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
import { Strong } from "~/components/mdx/strong";
import { Ul } from "~/components/mdx/ul";
import { Table } from "./components/mdx/table";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
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
    table: Table.Root,
    thead: Table.Header,
    tbody: Table.Body,
    th: Table.ColumnHeaderCell,
    tr: Table.Row,
    td: Table.Cell,
  };
}
