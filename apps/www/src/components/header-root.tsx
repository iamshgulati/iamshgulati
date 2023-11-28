"use client";

import { Box } from "@radix-ui/themes";

import { useOnScroll } from "~/hooks/useOnScroll";

export interface HeaderRootProps {
  ghost?: boolean;
}

export function HeaderRoot({
  children,
  ghost = false,
  className,
}: React.PropsWithChildren<HeaderRootProps> &
  React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element {
  const { scrollState } = useOnScroll(0, ghost);

  return (
    <Box data-scroll-state={scrollState} className={className}>
      {children}
    </Box>
  );
}
