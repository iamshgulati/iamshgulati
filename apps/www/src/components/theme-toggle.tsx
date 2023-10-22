"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, IconButton, Tooltip } from "@radix-ui/themes";
import { useTheme } from "next-themes";

import { updateThemeClasses } from "./theme-effect";

export function ThemeToggle(): React.JSX.Element {
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();

  const on2StepThemeChange = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme === systemTheme ? "system" : newTheme);
  }, [resolvedTheme, setTheme, systemTheme]);

  const _on3StepThemeChange = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    if (theme !== null && theme !== "system" && systemTheme === resolvedTheme) {
      setTheme("system");
    } else {
      setTheme(newTheme);
    }
  }, [resolvedTheme, setTheme, systemTheme, theme]);

  return (
    <Tooltip content="Toggle theme">
      <IconButton
        size="3"
        variant="ghost"
        color="gray"
        onClick={() => {
          on2StepThemeChange();
          updateThemeClasses();
          // updateMetaColor();
        }}
      >
        <AccessibleIcon label="Light theme">
          <SunIcon
            width="16"
            height="16"
            style={{ display: "var(--theme-toggle-light-icon-display)" }}
          />
        </AccessibleIcon>
        <AccessibleIcon label="Dark theme">
          <MoonIcon
            width="16"
            height="16"
            style={{ display: "var(--theme-toggle-dark-icon-display)" }}
          />
        </AccessibleIcon>
        <AccessibleIcon label="System theme">
          <Half2Icon
            width="16"
            height="16"
            style={{
              display: "var(--theme-toggle-system-icon-display)",
              transform: "rotate(45deg)",
            }}
          />
        </AccessibleIcon>
      </IconButton>
    </Tooltip>
  );
}
