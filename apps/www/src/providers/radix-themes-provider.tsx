import { Theme } from "@radix-ui/themes";

import { cn } from "~/lib/utils";

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
      className={cn(
        "radix-themes-custom-fonts",
        // "radix-themes-custom-reset",
      )}
    >
      {children}
    </Theme>
  );
}
