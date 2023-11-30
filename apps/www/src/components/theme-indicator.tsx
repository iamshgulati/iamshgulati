"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";

export function ThemeIndicator(): React.JSX.Element {
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();

  const _handleThemeToggleIn3Steps = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    if (theme !== null && theme !== "system" && systemTheme === resolvedTheme) {
      setTheme("system");
    } else {
      setTheme(newTheme);
    }
  }, [resolvedTheme, setTheme, systemTheme, theme]);

  // Toggle theme with ⌘ + D
  const handleThemeToggle = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme === systemTheme ? "system" : newTheme);
  }, [resolvedTheme, setTheme, systemTheme]);

  const handleThemeToggleKeydown = React.useCallback(
    (event: KeyboardEvent) => {
      const isCmdD =
        event.key === "d" && (event.metaKey || event.altKey) && !event.repeat;
      if (isCmdD) {
        event.preventDefault();
        handleThemeToggle();
        // updateThemeClasses();
        // updateMetaColor();
      }
    },
    [handleThemeToggle],
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleThemeToggleKeydown);
    return () =>
      document.removeEventListener("keydown", handleThemeToggleKeydown);
  }, [handleThemeToggleKeydown]);

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
        handleThemeToggle();
        // updateThemeClasses();
        // updateMetaColor();
      }}
    >
      <Half2Icon
        width="16"
        height="16"
        style={{
          display: "var(--system-theme-icon-display)",
          transform: "rotate(45deg)",
        }}
      />
      <SunIcon
        width="16"
        height="16"
        style={{ display: "var(--light-theme-icon-display)" }}
      />
      <MoonIcon
        width="16"
        height="16"
        style={{ display: "var(--dark-theme-icon-display)" }}
      />
    </IconButton>
  );
}
