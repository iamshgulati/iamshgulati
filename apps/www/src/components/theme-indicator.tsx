"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";

import { updateThemeClasses } from "./theme-effect";

export function ThemeIndicator(): React.JSX.Element {
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
    <IconButton
      size="1"
      variant="soft"
      color="gray"
      radius="full"
      style={{
        position: "fixed",
        bottom: "4px",
        right: "4px",
        zIndex: "999",
      }}
      onClick={() => {
        on2StepThemeChange();
        updateThemeClasses();
        // updateMetaColor();
      }}
    >
      <SunIcon
        width="16"
        height="16"
        style={{ display: "var(--theme-toggle-light-icon-display)" }}
      />
      <MoonIcon
        width="16"
        height="16"
        style={{ display: "var(--theme-toggle-dark-icon-display)" }}
      />
      <Half2Icon
        width="16"
        height="16"
        style={{
          display: "var(--theme-toggle-system-icon-display)",
          transform: "rotate(45deg)",
        }}
      />
    </IconButton>
  );
}
