import React from "react";
import { Slot } from "@radix-ui/themes";

import { MobileMenuProvider } from "~/components/mobile-menu-shell";
import { NextThemesProvider } from "./next-themes-provider";
import { RadixThemesProvider } from "./radix-themes-provider";

export function Providers({
  asChild = false,
  children,
}: React.PropsWithChildren<{ asChild?: boolean }>): React.JSX.Element {
  const Component = asChild ? Slot : React.Fragment;
  return (
    <Component>
      {/* <ThemeClasses /> */}
      <MobileMenuProvider>
        <NextThemesProvider>
          <RadixThemesProvider>
            {/* <FramerMotionProvider> */}
            {children}
            {/* </FramerMotionProvider> */}
          </RadixThemesProvider>
        </NextThemesProvider>
      </MobileMenuProvider>
    </Component>
  );
}
