"use client";

import { Slot } from "@radix-ui/themes";
import React from "react";

import { useKeyboardShortcuts } from "~/hooks/useKeyboardShortcuts";
import { useThemeToggle } from "~/hooks/useThemeToggle";

export const ThemeToggleShell = ({ ...props }: React.PropsWithChildren): React.JSX.Element => {
	const { handleThemeToggle } = useThemeToggle();

	useKeyboardShortcuts({
		handleThemeToggle,
	});

	return (
		<React.Fragment>
			<Slot onClick={() => handleThemeToggle()} {...props} />
		</React.Fragment>
	);
};
