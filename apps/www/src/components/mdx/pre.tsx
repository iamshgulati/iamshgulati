import React from "react";
import { Box, ScrollArea } from "@radix-ui/themes";

import { cn } from "~/lib/utils";
import styles from "./pre.module.css";

type PreProps = Omit<React.ComponentPropsWithoutRef<typeof Box>, "as"> &
  React.ComponentPropsWithoutRef<"pre">;

export const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
  { className, children, ...props },
  forwardedRef,
): React.JSX.Element {
  return (
    <Box asChild {...props}>
      <ScrollArea size="1" type="scroll">
        <pre ref={forwardedRef} className={cn(styles.Pre, className)}>
          {children}
        </pre>
      </ScrollArea>
    </Box>
  );
});
