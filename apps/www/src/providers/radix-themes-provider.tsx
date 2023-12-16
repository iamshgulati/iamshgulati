import React from "react";
import { Theme } from "@radix-ui/themes";

export const RadixThemesProvider = ({
  ...props
}: React.ComponentProps<typeof Theme>): React.JSX.Element => (
  <Theme
    {...props}
    hasBackground
    accentColor="indigo"
    grayColor="auto"
    panelBackground="translucent"
    scaling="100%"
    radius="medium"
    appearance="inherit"
    className="radix-themes-custom-fonts"
  />
);
