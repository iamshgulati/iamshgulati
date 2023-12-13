"use client";

import { Box } from "@radix-ui/themes";

import { useOnScroll } from "~/hooks/useOnScroll";

export interface HeaderShellProps {
  scrollDelay?: number;
}

export function HeaderShell({
  scrollDelay = 0,
  children = undefined,
  className = undefined,
}: React.PropsWithChildren<HeaderShellProps> &
  React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element {
  return (
    <Box
      data-scroll-state={useOnScroll().scrollState}
      data-delayed-scroll-state={useOnScroll(scrollDelay).scrollState}
      className={className}
    >
      {children}
    </Box>
  );
}
