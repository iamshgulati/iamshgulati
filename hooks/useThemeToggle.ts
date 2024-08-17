import { useTheme } from "next-themes";
import React from "react";

export const useThemeToggle = () => {
	const nextThemes = useTheme();

	const handleThemeToggleIn2Steps = React.useCallback(() => {
		const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
		nextThemes.setTheme(newTheme === nextThemes.systemTheme ? "system" : newTheme);
	}, [nextThemes]);

	const _handleThemeToggleIn3Steps = React.useCallback(() => {
		const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
		if (nextThemes.theme !== "system" && nextThemes.systemTheme === nextThemes.resolvedTheme) {
			nextThemes.setTheme("system");
		} else {
			nextThemes.setTheme(newTheme);
		}
	}, [nextThemes]);

	return {
		handleThemeToggle: handleThemeToggleIn2Steps,
	};
};
