"use client";

import React from "react";
import { useTheme } from "next-themes";

export const updateThemeClasses = function () {
  try {
    const system = "system";
    const currentTheme = localStorage.getItem("theme");
    const rootClassList = document.documentElement.classList;

    if (!currentTheme || currentTheme === system) {
      rootClassList.add(system);
    } else {
      rootClassList.remove(system);
    }
  } catch (e) {
    // unsupported
  }
};

/* themeColor.light and themeColor.dark must remain in sync with var(--color-background) */
/*
export const updateMetaColor = function () {
  try {
    const themeColor: Record<string, string> = {
      light: "white",
      dark: "color(display-p3 0.067 0.067 0.074)",
    };
    const light = "light";
    const dark = "dark";
    const system = "system";
    const currentTheme = localStorage.getItem("theme");
    const documentHead = document.head;

    const setMetaThemeColor = (theme: string) => {
      let metaElement: HTMLMetaElement | null = documentHead.querySelector(
        'meta[name="theme-color"]',
      );
      if (!metaElement) {
        metaElement = document.createElement("meta");
        metaElement.name = "theme-color";
        documentHead.appendChild(metaElement);
      }
      metaElement.content = themeColor[theme] ?? "";
    };

    if (currentTheme && currentTheme !== system) {
      setMetaThemeColor(currentTheme);
    } else {
      const prefersDarkScheme = "(prefers-color-scheme: dark)";
      const windowMedia = window.matchMedia(prefersDarkScheme);
      if (windowMedia.media !== prefersDarkScheme || windowMedia.matches) {
        setMetaThemeColor(dark);
      } else {
        setMetaThemeColor(light);
      }
    }
  } catch (e) {
    // unsupported
  }
};
*/

export function ThemeEffect(): React.JSX.Element {
  const { theme } = useTheme();

  const onMediaChange = React.useCallback(() => {
    updateThemeClasses();
    // updateMetaColor();
  }, []);

  React.useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", onMediaChange);
    return () => matchMedia.removeEventListener("change", onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = React.useCallback((event: StorageEvent) => {
    if (event.key === "theme") {
      updateThemeClasses();
      // updateMetaColor();
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  React.useEffect(() => {
    updateThemeClasses();
    // updateMetaColor();
  }, [theme]);

  return (
    <React.Fragment>
      <script
        dangerouslySetInnerHTML={{
          __html: `!${updateThemeClasses.toString()}()`,
        }}
      />
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `!${updateMetaColor.toString()}()`,
        }}
      /> */}
    </React.Fragment>
  );
}
