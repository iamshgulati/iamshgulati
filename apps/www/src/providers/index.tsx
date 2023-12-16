import React from "react";
import { Slot } from "@radix-ui/themes";

import { CommandMenuProvider } from "~/components/command-menu";
import { NextThemesProvider } from "./next-themes-provider";
import { RadixThemesProvider } from "./radix-themes-provider";

export const Providers = ({
  asChild = false,
  children = undefined,
}: React.PropsWithChildren<{ asChild?: boolean }>): React.JSX.Element => {
  const Component = asChild ? Slot : React.Fragment;
  return (
    <Component>
      <CommandMenuProvider>
        <NextThemesProvider>
          <RadixThemesProvider>{children}</RadixThemesProvider>
        </NextThemesProvider>
      </CommandMenuProvider>
    </Component>
  );
};
