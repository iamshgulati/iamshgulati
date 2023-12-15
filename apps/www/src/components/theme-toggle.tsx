"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";

export function ThemeToggle(): React.JSX.Element {
  const nextThemes = useTheme();

  /*
   * Toggle Theme with Command + D keyboard shortcut
   */
  const handleThemeToggle = React.useCallback(() => {
    const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
    nextThemes.setTheme(
      newTheme === nextThemes.systemTheme ? "system" : newTheme,
    );
  }, [nextThemes]);

  const onThemeToggleShortcut = React.useCallback(
    (event: KeyboardEvent) => {
      const isCmdD = event.key === "d" && (event.metaKey || event.altKey);
      if (isCmdD) {
        event.preventDefault();
        if (!event.repeat) {
          handleThemeToggle();
        }
      }
    },
    [handleThemeToggle],
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
      onClick={() => handleThemeToggle()}
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

/*
const handleThemeToggle = React.useCallback(() => {
    const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
    if (
      nextThemes.theme !== null &&
      nextThemes.theme !== "system" &&
      nextThemes.systemTheme === nextThemes.resolvedTheme
    ) {
      nextThemes.setTheme("system");
    } else {
      nextThemes.setTheme(newTheme);
    }
  }, [nextThemes]);
*/
