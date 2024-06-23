"use client";

import React from "react";
import { useTheme } from "next-themes";

export function ThemeClasses(): React.JSX.Element {
  const theme = useTheme();

  const updateThemeClasses = function () {
    try {
      const system = "system";
      const currentTheme = localStorage.getItem("theme");
      const rootClassList = document.documentElement.classList;

      if (!currentTheme || currentTheme === system) {
        rootClassList.add(system);
      } else {
        rootClassList.remove(system);
      }
    } catch (error) {
      console.error(
        `Failed to update theme classes. Error - ${JSON.stringify(error)}`,
      );
    }
  };

  const onMediaChange = React.useCallback(() => {
    updateThemeClasses();
  }, []);

  React.useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", onMediaChange);
    return () => matchMedia.removeEventListener("change", onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = React.useCallback((event: StorageEvent) => {
    if (event.key === "theme") {
      updateThemeClasses();
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  React.useEffect(() => {
    updateThemeClasses();
  }, [theme]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `!${updateThemeClasses.toString()}()`,
      }}
    />
  );
}

/**
 * @deprecated The method should not be used. Use themeColor property in next-themes instead.
 * themeColor.light and themeColor.dark must remain in sync with var(--color-background)
 */
export function ThemeMetaColor(): React.JSX.Element {
  const theme = useTheme();
  const updateMetaColor = function () {
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
    } catch (error) {
      console.error(
        `Failed to update meta color. Error - ${JSON.stringify(error)}`,
      );
    }
  };

  const onMediaChange = React.useCallback(() => {
    updateMetaColor();
  }, []);

  React.useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", onMediaChange);
    return () => matchMedia.removeEventListener("change", onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = React.useCallback((event: StorageEvent) => {
    if (event.key === "theme") {
      updateMetaColor();
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  React.useEffect(() => {
    updateMetaColor();
  }, [theme]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `!${updateMetaColor.toString()}()`,
      }}
    />
  );
}
