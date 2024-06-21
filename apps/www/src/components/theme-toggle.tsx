"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

import { useThemeToggle } from "~/hooks/useThemeToggle";

export const ThemeToggle = (): React.JSX.Element => {
  const { handleThemeToggle } = useThemeToggle();

  return (
    <IconButton
      size="3"
      variant="ghost"
      color="gray"
      onClick={() => handleThemeToggle()}
    >
      <Half2Icon
        aria-label="System theme"
        width="16"
        height="16"
        style={{
          display: "var(--system-theme-icon-display)",
          transform: "rotate(45deg)",
        }}
      />
      <SunIcon
        aria-label="Light theme"
        width="16"
        height="16"
        style={{ display: "var(--light-theme-icon-display)" }}
      />
      <MoonIcon
        aria-label="Dark theme"
        width="16"
        height="16"
        style={{ display: "var(--dark-theme-icon-display)" }}
      />
    </IconButton>
  );
};
