// TODO: Try to enable color scheme or remove the code
// TODO: Add React.JSX.Element

import React from "react";
import { Box } from "@radix-ui/themes";

// import { createContext } from "@radix-ui/react-context";
import { cn } from "~/lib/utils";
import { HiddenScroll } from "./hidden-scroll";
import styles from "./pre.module.css";

// export const [SyntaxSchemeProvider, useSyntaxSchemeContext] = createContext<{
//   scheme: "indigo" | "pink" | "teal" | "blue" | "red";
// }>("SyntaxScheme");

type PreProps = React.ComponentPropsWithoutRef<typeof Box> &
  React.ComponentPropsWithoutRef<"pre">;

export const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
  { className, children, ...props },
  forwardedRef,
) {
  // const { scheme } = useSyntaxSchemeContext("Pre");

  return (
    <Box asChild {...props}>
      <pre
        ref={forwardedRef}
        className={cn(
          styles.Pre,
          // styles[scheme],
          className,
        )}
      >
        <HiddenScroll>{children}</HiddenScroll>
      </pre>
    </Box>
  );
});
