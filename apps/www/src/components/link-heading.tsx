import React from "react";
import type { PropsWithoutRefOrColor } from "@radix-ui/themes";
import { Link } from "@radix-ui/themes";

import { cn } from "~/lib/classnames";
import { extractTextFromChildren } from "~/lib/react";
import { slugify } from "~/lib/slugify";
import { Icons } from "./icons";
import styles from "./link-heading.module.css";

export const LinkHeading = ({
  children = undefined,
  className = undefined,
  ...props
}: PropsWithoutRefOrColor<"a">): React.JSX.Element => {
  const slug = slugify(extractTextFromChildren(children) ?? "");
  return (
    <Link
      {...props}
      id={slug}
      href={`#${slug}`}
      className={cn(className, styles.LinkHeading)}
    >
      <Icons.HashIcon aria-hidden />
      {children}
    </Link>
  );
};
