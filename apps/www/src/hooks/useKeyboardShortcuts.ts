import React from "react";

type KeyboardShortcutHandler = (event: KeyboardEvent) => void;

interface KeyboardShortcutsProps {
  handleCommandMenuToggle?: KeyboardShortcutHandler;
  handleThemeToggle?: KeyboardShortcutHandler;
}

export const useKeyboardShortcuts = ({
  handleCommandMenuToggle,
  handleThemeToggle,
}: KeyboardShortcutsProps) => {
  const onKeyboardShortcut = React.useCallback(
    (event: KeyboardEvent) => {
      const isCmdK = event.key === "k" && (event.metaKey || event.altKey);
      const isCmdD = event.key === "d" && (event.metaKey || event.altKey);

      if (isCmdK && handleCommandMenuToggle) {
        event.preventDefault();
        if (!event.repeat) {
          handleCommandMenuToggle(event);
        }
      }

      if (isCmdD && handleThemeToggle) {
        event.preventDefault();
        if (!event.repeat) {
          handleThemeToggle(event);
        }
      }
    },
    [handleCommandMenuToggle, handleThemeToggle],
  );

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyboardShortcut);
    return () => {
      document.removeEventListener("keydown", onKeyboardShortcut);
    };
  }, [handleCommandMenuToggle, handleThemeToggle, onKeyboardShortcut]);
};
