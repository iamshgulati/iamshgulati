"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

/* NextThemesProvider.tsx -> themeColor must remain in sync with .HeaderInner -> background-color prop */
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
