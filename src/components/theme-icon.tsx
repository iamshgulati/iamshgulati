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
      aria-label="System theme"
      style={{
        display: "var(--system-theme-icon-display)",
        // transform: "rotate(45deg)",
      }}
      {...iconProps}
    />
    <Icons.SunIcon
      aria-label="Light theme"
      style={{ display: "var(--light-theme-icon-display)" }}
      {...iconProps}
    />
    <Icons.MoonIcon
      aria-label="Dark theme"
      style={{ display: "var(--dark-theme-icon-display)" }}
      {...iconProps}
    />
  </React.Fragment>
);
