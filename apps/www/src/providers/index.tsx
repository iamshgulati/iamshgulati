import React from "react";

import { NextThemesProvider } from "./next-themes-provider";
import { RadixThemesProvider } from "./radix-themes-provider";

export function Providers({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <React.Fragment>
      {/* <ThemeClasses /> */}
      <NextThemesProvider>
        <RadixThemesProvider>
          {/* <FramerMotionProvider> */}
          {children}
          {/* </FramerMotionProvider> */}
        </RadixThemesProvider>
      </NextThemesProvider>
    </React.Fragment>
  );
}
