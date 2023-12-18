import React from "react";
import { Link2Icon } from "@radix-ui/react-icons";
import type { PropsWithoutRefOrColor } from "@radix-ui/themes";
import { Link } from "@radix-ui/themes";

import { cn } from "~/lib/classnames";
import styles from "./link-heading.module.css";

export const LinkHeading = ({
  id = undefined,
  children = undefined,
  className = undefined,
  ...props
}: PropsWithoutRefOrColor<"a">): React.JSX.Element => (
  <Link
    {...props}
    id={id}
    href={`#${id}`}
    className={cn(className, styles.LinkHeading)}
  >
    <Link2Icon aria-hidden />
    {children}
  </Link>
);
