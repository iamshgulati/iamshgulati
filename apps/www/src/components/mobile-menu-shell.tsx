"use client";

import React from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  /*
   * Close mobile menu if viewport becomes larger than size md
   * March @media (--md)
   */
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 1024px)");
    const onViewportWidthChange = () => {
      setOpen((open) => (open ? !mediaQueryList.matches : false));
    };
    onViewportWidthChange();
    mediaQueryList.addEventListener("change", onViewportWidthChange);
    return () =>
      mediaQueryList.removeEventListener("change", onViewportWidthChange);
  }, []);

  /*
   * Close mobile menu if path changes.
   * NOTE: Chnage this to intercepting route change action
   * using userRouter hook when support is added in the future.
   */
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <MenuProvider open={open} setOpen={setOpen}>
      {children}
    </MenuProvider>
  );
};

export const useMobileMenuContext = () => useMenuContext("MobileMenu");

export const MobileMenuShell = ({
  children,
}: React.PropsWithChildren): React.JSX.Element | null => {
  const mobileMenu = useMobileMenuContext();
  ``;

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

export const MobileMenuTrigger = ({
  asChild = false,
  children,
  className = undefined,
}: React.PropsWithChildren<{ asChild?: boolean }> &
  React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => {
  const mobileMenu = useMobileMenuContext();
  const Component = asChild ? Slot : Box;
  return (
    <Component
      data-state={mobileMenu.open ? "open" : "closed"}
      onClick={() => mobileMenu.setOpen((open) => !open)}
      className={className}
    >
      {children}
    </Component>
  );
};
