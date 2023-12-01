"use client";

import { Box } from "@radix-ui/themes";

import { useOnScroll } from "~/hooks/useOnScroll";
import { useMobileMenuContext } from "./mobile-menu-shell";

export interface HeaderShellProps {
  ghost?: boolean;
}

export function HeaderShell({
  children = undefined,
  ghost = false,
  className = undefined,
}: React.PropsWithChildren<HeaderShellProps> &
  React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element {
  const mobileMenu = useMobileMenuContext();
  const { scrollState } = useOnScroll(0, ghost);

  return (
    <Box
      data-mobile-menu-open={mobileMenu.open}
      data-scroll-state={scrollState}
      className={className}
    >
      {children}
    </Box>
  );
}
