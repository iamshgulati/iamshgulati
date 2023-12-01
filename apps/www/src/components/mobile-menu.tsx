import { Box, ScrollArea, Theme } from "@radix-ui/themes";

import type { AppRoute, Page } from "~/types";
import { Header } from "./header";
import { MainNav } from "./main-nav";
import { MobileMenuShell } from "./mobile-menu-shell";
import { MobileNav } from "./mobile-nav";

interface MobileMenuProps {
  productLinks?: Page[];
  mainNavPages?: Page[];
  mobileNavRoutes: AppRoute[];
}

export const MobileMenu = ({
  productLinks = undefined,
  mainNavPages = undefined,
  mobileNavRoutes,
}: MobileMenuProps): React.JSX.Element => {
  return (
    <Theme accentColor="indigo">
      <MobileMenuShell>
        <Header productLinks={productLinks}>
          {mainNavPages && <MainNav mainNavPages={mainNavPages} />}
        </Header>

        <ScrollArea>
          <Box pt="4" px="4" pb="9">
            <MobileNav routes={mobileNavRoutes} />
          </Box>
        </ScrollArea>
      </MobileMenuShell>
    </Theme>
  );
};
