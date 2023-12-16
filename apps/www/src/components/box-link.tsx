import React from "react";

import { cn } from "~/lib/utils";
import styles from "./box-link.module.css";

interface BoxLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  ariaLabel: string;
}

export const BoxLink = React.forwardRef<HTMLAnchorElement, BoxLinkProps>(
  function BoxLink(
    { ariaLabel, className = undefined, ...props },
    forwardedRef,
  ): React.JSX.Element {
    return (
      <a
        aria-label={ariaLabel}
        ref={forwardedRef}
        className={cn(className, styles.BoxLink)}
        {...props}
      />
    );
  },
);
