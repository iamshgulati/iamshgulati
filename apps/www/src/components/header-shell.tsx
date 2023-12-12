"use client";

import { Box } from "@radix-ui/themes";

import { useOnScroll } from "~/hooks/useOnScroll";

export interface HeaderShellProps {
  threshold?: number;
  ghost?: boolean;
}

export function HeaderShell({
  children = undefined,
  threshold = 0,
  ghost = false,
  className = undefined,
}: React.PropsWithChildren<HeaderShellProps> &
  React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element {
  const { scrollState } = useOnScroll(threshold, ghost);

  return (
    <Box data-scroll-state={scrollState} className={className}>
      {children}
    </Box>
  );
}
