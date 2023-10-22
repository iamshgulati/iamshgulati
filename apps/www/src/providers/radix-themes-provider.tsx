import { Theme, ThemePanel } from "@radix-ui/themes";

import { isProduction } from "~/config/env";

export function RadixThemesProvider({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <Theme
      hasBackground
      accentColor="indigo"
      grayColor="auto"
      appearance="inherit"
      panelBackground="translucent"
      scaling="100%"
      radius="medium"
    >
      {children}
      {!isProduction && <ThemePanel defaultOpen={false} />}
    </Theme>
  );
}
