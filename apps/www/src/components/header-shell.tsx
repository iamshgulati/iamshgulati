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
  const { scrollState } = useOnScroll(scrollDelay);

  return (
    <Box data-scroll-state={scrollState} className={className}>
      {children}
    </Box>
  );
}
