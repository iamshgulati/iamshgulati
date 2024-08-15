import React from "react";
import { Theme } from "@radix-ui/themes";

export const RadixThemesProvider = ({
  ...props
}: React.ComponentProps<typeof Theme>): React.JSX.Element => (
  <Theme
    hasBackground
    accentColor="indigo"
    grayColor="slate"
    panelBackground="translucent"
    scaling="100%"
    radius="medium"
    appearance="inherit"
    className="radix-themes-custom-fonts"
    {...props}
  />
);