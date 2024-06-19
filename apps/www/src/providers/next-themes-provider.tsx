"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

/* NextThemesProvider.tsx -> themeColor must remain in sync with .HeaderInner -> background-color prop */
export const NextThemesProvider = ({
  ...props
}: React.ComponentProps<typeof ThemeProvider>): React.JSX.Element => (
  <ThemeProvider
    {...props}
    attribute="class"
    defaultTheme="system"
    enableSystem
    enableColorScheme
    disableTransitionOnChange
    themeColor={{
      light: "white",
      dark: "color(display-p3 0.067 0.067 0.074)",
    }}
  />
);
