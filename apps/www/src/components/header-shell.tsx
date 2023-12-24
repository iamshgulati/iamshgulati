"use client";

import React from "react";
import { Box } from "@radix-ui/themes";

import { useScrollState } from "~/hooks/useScrollState";

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
      data-scroll-state={
        useScrollState({
          scrollDistanceThreshold: 30,
        }).scrollState
      }
      data-delayed-scroll-state={
        useScrollState({
          viewportScrollFactorThreshold,
          scrollDistanceThreshold,
        }).scrollState
      }
      className={className}
    >
      {children}
    </Box>
  );
};
