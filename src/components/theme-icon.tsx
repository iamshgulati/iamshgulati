import React from "react";

import type { Icon } from "./icons";
import { Icons } from "./icons";

export const ThemeIcon = ({
  iconProps = { width: "16", height: "16" },
}: {
  iconProps?: React.ComponentProps<Icon>;
}): React.JSX.Element => (
  <React.Fragment>
    <Icons.Half2Icon
      {...iconProps}
      aria-label="System theme"
      style={{
        display: "var(--system-theme-icon-display)",
        // transform: "rotate(45deg)",
      }}
    />
    <Icons.SunIcon
      {...iconProps}
      aria-label="Light theme"
      style={{ display: "var(--light-theme-icon-display)" }}
    />
    <Icons.MoonIcon
      {...iconProps}
      aria-label="Dark theme"
      style={{ display: "var(--dark-theme-icon-display)" }}
    />
  </React.Fragment>
);
