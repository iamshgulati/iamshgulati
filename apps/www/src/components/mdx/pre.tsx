import React from "react";
import { Box } from "@radix-ui/themes";

import { cn } from "~/lib/classnames";
import styles from "./pre.module.css";

type PreProps = Omit<React.ComponentPropsWithoutRef<typeof Box>, "as"> &
  React.ComponentPropsWithoutRef<"pre">;

export const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
  { className = undefined, children = undefined, ...props },
  forwardedRef,
): React.JSX.Element {
  return (
    <Box asChild {...props}>
      <pre ref={forwardedRef} className={cn(styles.Pre, className, "shiki")}>
        {/* <ScrollArea size="1" type="scroll"> */}
        {children}
        {/* </ScrollArea> */}
      </pre>
    </Box>
  );
});
