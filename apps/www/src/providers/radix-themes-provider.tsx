import React from "react";
import { Theme } from "@radix-ui/themes";

export function RadixThemesProvider({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <Theme
      hasBackground
      accentColor="indigo"
      grayColor="auto"
      panelBackground="translucent"
      scaling="100%"
      radius="medium"
      appearance="inherit"
      // className="radix-themes-custom-fonts"
    >
      {children}
    </Theme>
  );
}
