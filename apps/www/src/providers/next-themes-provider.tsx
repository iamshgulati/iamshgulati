"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

/**
 * themeColor.light and themeColor.dark should be in sync
 * with var(--color-background) or var(--color-page-background)
 */
export function NextThemesProvider({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
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
    >
      {children}
    </ThemeProvider>
  );
}
