import React from "react";
import { useTheme } from "next-themes";

export const useThemeToggle = () => {
  const nextThemes = useTheme();

  const handleGeneralThemeToggle = React.useCallback(() => {
    const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
    nextThemes.setTheme(
      newTheme === nextThemes.systemTheme ? "system" : newTheme,
    );
  }, [nextThemes]);

  const handleSpecificThemeToggle = React.useCallback(() => {
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

  return { handleGeneralThemeToggle, handleSpecificThemeToggle };
};
