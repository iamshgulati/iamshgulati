import React from "react";
import { useTheme } from "next-themes";

export const useThemeToggle = () => {
  const nextThemes = useTheme();

  const _handleThemeToggleIn2Steps = React.useCallback(() => {
    const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
    nextThemes.setTheme(
      newTheme === nextThemes.systemTheme ? "system" : newTheme,
    );
  }, [nextThemes]);

  const handleThemeToggleIn3Steps = React.useCallback(() => {
    const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
    if (
      nextThemes.theme !== "system" &&
      nextThemes.systemTheme === nextThemes.resolvedTheme
    ) {
      nextThemes.setTheme("system");
    } else {
      nextThemes.setTheme(newTheme);
    }
  }, [nextThemes]);

  return {
    handleThemeToggle: handleThemeToggleIn3Steps,
  };
};
