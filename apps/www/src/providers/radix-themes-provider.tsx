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
        /* reset letter-spacing */
        "radix-themes-custom-reset",
        /* apply custom font family */
        "radix-themes-custom-fonts",
      )}
    >
      {children}
    </Theme>
  );
}
