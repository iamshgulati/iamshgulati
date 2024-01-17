import React from "react";
import { Slot } from "@radix-ui/themes";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import AutoRefresh from "~/components/auto-refresh";
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
          <RadixThemesProvider>
            <WrapBalancerProvider>
              <AutoRefresh>{children}</AutoRefresh>
            </WrapBalancerProvider>
          </RadixThemesProvider>
        </NextThemesProvider>
      </CommandMenuProvider>
    </Component>
  );
};
