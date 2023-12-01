import React from "react";

import { MobileMenuProvider } from "~/components/mobile-menu";
import { NextThemesProvider } from "./next-themes-provider";
import { RadixThemesProvider } from "./radix-themes-provider";

export function Providers({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
