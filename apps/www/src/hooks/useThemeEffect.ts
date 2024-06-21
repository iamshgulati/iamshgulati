import React from "react";

export const useThemeEffect = () => {
  const updateThemeClasses = React.useCallback(() => {
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
  }, []);

  /*
   * themeColor.light and themeColor.dark must remain in sync with var(--color-background)
   */
  /**
   * @deprecated The method should not be used. Use themeColor property in next-themes instead.
   */
  const updateMetaColor = React.useCallback(() => {
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
  }, []);

  return {
    updateThemeClasses,
    updateMetaColor,
  };
};
