"use client";

import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { useThemeToggle } from "~/hooks/useThemeToggle";

type ThemeToggleProps = React.ComponentProps<typeof IconButton> & {
  iconProps?: React.ComponentProps<Icon>;
};

export const ThemeToggle = ({
  iconProps = { width: "16", height: "16" },
  ...props
}: ThemeToggleProps): React.JSX.Element => {
  const { handleThemeToggle } = useThemeToggle();

  return (
    <React.Fragment>
      <IconButton
        {...props}
        size="3"
        variant="ghost"
        color="gray"
        onClick={() => handleThemeToggle()}
      >
        <Half2Icon
          {...iconProps}
          aria-label="System theme"
          style={{
            display: "var(--system-theme-icon-display)",
            transform: "rotate(45deg)",
          }}
        />
        <SunIcon
          {...iconProps}
          aria-label="Light theme"
          style={{ display: "var(--light-theme-icon-display)" }}
        />
        <MoonIcon
          {...iconProps}
          aria-label="Dark theme"
          style={{ display: "var(--dark-theme-icon-display)" }}
        />
      </IconButton>
      {/* <UpdateThemeClasses /> */}
    </React.Fragment>
  );
};
