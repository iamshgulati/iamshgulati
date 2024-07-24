import React from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

import type { Icon } from "./icons";

export const ThemeIcon = ({
  iconProps = { width: "16", height: "16" },
}: {
  iconProps?: React.ComponentPropsWithoutRef<Icon>;
}): React.JSX.Element => (
  <React.Fragment>
    <Half2Icon
      aria-label="System theme"
      style={{
        display: "var(--system-theme-icon-display)",
        // transform: "rotate(45deg)",
      }}
      {...iconProps}
    />
    <SunIcon
      aria-label="Light theme"
      style={{ display: "var(--light-theme-icon-display)" }}
      {...iconProps}
    />
    <MoonIcon
      aria-label="Dark theme"
      style={{ display: "var(--dark-theme-icon-display)" }}
      {...iconProps}
    />
  </React.Fragment>
);
