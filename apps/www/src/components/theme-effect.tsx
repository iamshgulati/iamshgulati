"use client";

import React from "react";
import { useTheme } from "next-themes";

import { useThemeEffect } from "~/hooks/useThemeEffect";

export function ThemeClasses(): React.JSX.Element {
  const theme = useTheme();
  const { updateThemeClasses } = useThemeEffect();

  const onMediaChange = React.useCallback(() => {
    updateThemeClasses();
  }, [updateThemeClasses]);

  React.useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", onMediaChange);
    return () => matchMedia.removeEventListener("change", onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = React.useCallback(
    (event: StorageEvent) => {
      if (event.key === "theme") {
        updateThemeClasses();
      }
    },
    [updateThemeClasses],
  );

  React.useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  React.useEffect(() => {
    updateThemeClasses();
  }, [updateThemeClasses, theme]);

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
 */
export function ThemeMetaColor(): React.JSX.Element {
  const theme = useTheme();
  const { updateMetaColor } = useThemeEffect();

  const onMediaChange = React.useCallback(() => {
    updateMetaColor();
  }, [updateMetaColor]);

  React.useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", onMediaChange);
    return () => matchMedia.removeEventListener("change", onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = React.useCallback(
    (event: StorageEvent) => {
      if (event.key === "theme") {
        updateMetaColor();
      }
    },
    [updateMetaColor],
  );

  React.useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  React.useEffect(() => {
    updateMetaColor();
  }, [theme, updateMetaColor]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `!${updateMetaColor.toString()}()`,
      }}
    />
  );
}
