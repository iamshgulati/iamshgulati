import React from "react";
import { Slot } from "@radix-ui/themes";

import AutoRefresh from "~/components/auto-refresh";
import { NextThemesProvider } from "./next-themes-provider";
import { RadixThemesProvider } from "./radix-themes-provider";

export const Providers = ({
  asChild = false,
  children = undefined,
}: React.PropsWithChildren<{ asChild?: boolean }>): React.JSX.Element => {
  const Component = asChild ? Slot : React.Fragment;
  return (
    <Component>
      {/* <CommandMenuProvider> */}
      <NextThemesProvider>
        <RadixThemesProvider>
          <AutoRefresh>{children}</AutoRefresh>
        </RadixThemesProvider>
      </NextThemesProvider>
      {/* </CommandMenuProvider> */}
    </Component>
  );
};
