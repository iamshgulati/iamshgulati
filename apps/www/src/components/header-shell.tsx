"use client";

import React from "react";
import { Box } from "@radix-ui/themes";

import { useOnScroll } from "~/hooks/useOnScroll";

export interface HeaderShellProps {
  scrollHeightFactor?: number;
  scrollDelay?: number;
}

export const HeaderShell = ({
  scrollHeightFactor = undefined,
  scrollDelay = undefined,
  children = undefined,
  className = undefined,
}: React.PropsWithChildren<HeaderShellProps> &
  React.ComponentProps<typeof Box>): React.JSX.Element => {
  return (
    <Box
      data-scroll-state={useOnScroll()}
      data-delayed-scroll-state={useOnScroll(scrollHeightFactor, scrollDelay)}
      className={className}
    >
      {children}
    </Box>
  );
};
