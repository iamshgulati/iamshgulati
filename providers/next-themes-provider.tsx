"use client";

import { ThemeProvider } from "next-themes";
import type React from "react";

/* NextThemesProvider.tsx -> themeColor must remain in sync with .HeaderInner -> background-color prop */
export const NextThemesProvider = ({
	...props
}: React.ComponentProps<typeof ThemeProvider>): React.JSX.Element => (
	<ThemeProvider
		attribute="class"
		defaultTheme="system"
		enableSystem
		enableColorScheme
		disableTransitionOnChange
		themeColor={{
			light: "white",
			dark: "color(display-p3 0.067 0.067 0.074)",
		}}
		{...props}
	/>
);
