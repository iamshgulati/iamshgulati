"use client";

import React from "react";
import { Box } from "@radix-ui/themes";

import { useOnScroll } from "~/hooks/useOnScroll";

export interface HeaderShellProps {
  scrollHeightFactorThreshold?: number;
  scrollDelay?: number;
}

export const HeaderShell = ({
  scrollHeightFactorThreshold = undefined,
  scrollDelay = undefined,
  children = undefined,
  className = undefined,
}: React.PropsWithChildren<HeaderShellProps> &
  React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => {
  return (
    <Box
      data-scroll-state={useOnScroll()}
      data-delayed-scroll-state={useOnScroll(
        scrollHeightFactorThreshold,
        scrollDelay,
      )}
      className={className}
    >
      {children}
    </Box>
  );
};
