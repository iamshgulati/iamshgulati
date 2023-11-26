"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

/*
 * Any change to NextThemesProvider.tsx -> themeColor object
 * must also be updated in
 * .HeaderInner -> background-color prop
 * --color-page-background = color(display-p3 0.067 0.067 0.074)
 * --color-panel-translucent = color(display-p3 0.1059 0.1137 0.1176 / 0.7)
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
