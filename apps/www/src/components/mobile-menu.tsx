"use client";

import React from "react";
import { createContext } from "@radix-ui/react-context";
import { Box, Portal, ScrollArea, Slot, Theme } from "@radix-ui/themes";
import { RemoveScroll } from "react-remove-scroll";

const [MenuProvider, useMenuContext] = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>("MobileMenu");

export const MobileMenuProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = React.useState<boolean>(false);

  // const router = useRouter();

  // React.useEffect(() => {
  //   const handleRouteChangeStart = () => {
  //     // Dismiss mobile keyboard if focusing an input (e.g. when searching)
  //     if (document.activeElement instanceof HTMLInputElement) {
  //       document.activeElement.blur();
  //     }

  //     setOpen(false);
  //   };

  //   router.events.on("routeChangeStart", handleRouteChangeStart);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChangeStart);
  //   };
  // }, []);

  React.useEffect(() => {
    // Match @media (--md)
    const mediaQueryList = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setOpen((open) => (open ? !mediaQueryList.matches : false));
    };

    handleChange();
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  return (
    <MenuProvider open={open} setOpen={setOpen}>
      {children}
    </MenuProvider>
  );
};

export const useMobileMenuContext = () => useMenuContext("MobileMenu");

export const MobileMenu = () => {
  const mobileMenu = useMobileMenuContext();

  if (!mobileMenu.open) {
    return null;
  }

  return (
    <Portal>
      <Theme>
        <RemoveScroll as={Slot} allowPinchZoom enabled>
          <Box
            position="fixed"
            inset="0"
            style={{
              zIndex: 2,
              display: "grid",
              gridTemplateRows: "auto minmax(0, 1fr)",
              backgroundColor: "var(--color-background)",
            }}
          >
            {/* <Header /> */}
            <ScrollArea>
              <Box pt="4" px="4" pb="9">
                {/* Add the nav items here */}
              </Box>
            </ScrollArea>
          </Box>
        </RemoveScroll>
      </Theme>
    </Portal>
  );
};
