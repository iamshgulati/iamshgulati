"use client";

import React from "react";
import { Box } from "@radix-ui/themes";

import { useOnScroll } from "~/hooks/useOnScroll";

export interface HeaderShellProps {
  viewportScrollFactorThreshold?: number;
  scrollDistanceThreshold?: number;
}

export const HeaderShell = ({
  viewportScrollFactorThreshold = undefined,
  scrollDistanceThreshold = undefined,
  children = undefined,
  className = undefined,
}: React.PropsWithChildren<HeaderShellProps> &
  React.ComponentProps<typeof Box>): React.JSX.Element => {
  return (
    <Box
      data-scroll-state={useOnScroll()}
      data-delayed-scroll-state={useOnScroll(
        viewportScrollFactorThreshold,
        scrollDistanceThreshold,
      )}
      className={className}
    >
      {children}
    </Box>
  );
};
