"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";

export function ThemeToggle(): React.JSX.Element {
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();

  const _onThemeTogglePlusPlus = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    if (theme !== null && theme !== "system" && systemTheme === resolvedTheme) {
      setTheme("system");
    } else {
      setTheme(newTheme);
    }
  }, [resolvedTheme, setTheme, systemTheme, theme]);

  // Toggle theme with ⌘ + D
  const onThemeToggle = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme === systemTheme ? "system" : newTheme);
  }, [resolvedTheme, setTheme, systemTheme]);

  const onThemeToggleShortcut = React.useCallback(
    (event: KeyboardEvent) => {
      const isCmdD = event.key === "d" && (event.metaKey || event.altKey);
      if (isCmdD) {
        event.preventDefault();
        if (!event.repeat) {
          onThemeToggle();
        }
      }
    },
    [onThemeToggle],
  );

  React.useEffect(() => {
    document.addEventListener("keydown", onThemeToggleShortcut);
    return () => document.removeEventListener("keydown", onThemeToggleShortcut);
  }, [onThemeToggleShortcut]);

  return (
    <IconButton
      size="3"
      variant="ghost"
      color="gray"
      onClick={() => {
        onThemeToggle();
      }}
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
