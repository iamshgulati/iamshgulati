"use client";

import React from "react";
import { Slot } from "@radix-ui/themes";

import { useThemeToggle } from "~/hooks/useThemeToggle";

export const ThemeToggleShell = ({
  ...props
}: React.PropsWithChildren): React.JSX.Element => {
  const { handleThemeToggle } = useThemeToggle();

  return (
    <React.Fragment>
      <Slot onClick={() => handleThemeToggle()} {...props} />
    </React.Fragment>
  );
};
