"use client";

import React from "react";
import { createContext } from "@radix-ui/react-context";
import { Box, Portal, Slot, Theme } from "@radix-ui/themes";
import { RemoveScroll } from "react-remove-scroll";

const [MenuProvider, useMenuContext] = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>("MobileMenu");

export const MobileMenuProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

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

export const MobileMenuTrigger = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const mobileMenu = useMobileMenuContext();

  return (
    <Slot
      data-state={mobileMenu.open ? "open" : "closed"}
      onClick={() => mobileMenu.setOpen((open) => !open)}
    >
      {children}
    </Slot>
  );
};

export const MobileMenuShell = ({
  children,
}: React.PropsWithChildren): React.JSX.Element | null => {
  const mobileMenu = useMobileMenuContext();

  if (!mobileMenu.open) {
    return null;
  }

  return (
    <Portal>
      <Theme accentColor="indigo">
        <RemoveScroll as={Slot} allowPinchZoom enabled>
          <Box
            position="fixed"
            inset="0"
            style={{
              zIndex: 1,
              display: "grid",
              gridTemplateRows: "auto minmax(0, 1fr)",
              backgroundColor: "var(--color-background)",
              color: "var(--gray-12)",
            }}
          >
            {children}
          </Box>
        </RemoveScroll>
      </Theme>
    </Portal>
  );
};
