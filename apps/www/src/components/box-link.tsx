import React from "react";

import { cn } from "~/lib/utils";
import styles from "./box-link.module.css";

interface BoxLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  ariaLabel: string;
}

export const BoxLink = React.forwardRef<HTMLAnchorElement, BoxLinkProps>(
  function BoxLink({ ariaLabel, className, ...props }, forwardedRef) {
    return (
      <a
        aria-label={ariaLabel}
        ref={forwardedRef}
        className={cn(styles.BoxLink, className)}
        {...props}
      />
    );
  },
);
