/*
"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, IconButton } from "@radix-ui/themes";

import { useThemeToggle } from "~/hooks/useThemeToggle";

export function ThemeToggle(): React.JSX.Element {
  const { handleGeneralThemeToggle } = useThemeToggle();

  return (
    <IconButton
      size="3"
      variant="ghost"
      color="gray"
      onClick={() => handleGeneralThemeToggle()}
    >
      <AccessibleIcon label="System theme">
        <Half2Icon
          width="16"
          height="16"
          style={{
            display: "var(--system-theme-icon-display)",
            transform: "rotate(45deg)",
          }}
        />
      </AccessibleIcon>
      <AccessibleIcon label="Light theme">
        <SunIcon
          width="16"
          height="16"
          style={{ display: "var(--light-theme-icon-display)" }}
        />
      </AccessibleIcon>
      <AccessibleIcon label="Dark theme">
        <MoonIcon
          width="16"
          height="16"
          style={{ display: "var(--dark-theme-icon-display)" }}
        />
      </AccessibleIcon>
    </IconButton>
  );
}
 */
