import { Box, ScrollArea } from "@radix-ui/themes";

import type { AppRoute, Page } from "~/types";
import { Header } from "./header";
import { MainNav } from "./main-nav";
import { MobileMenuShell } from "./mobile-menu-shell";
import { MobileNav } from "./mobile-nav";

interface MobileMenuProps {
  mainNavPages?: Page[];
  productLinkRoutes?: AppRoute[];
  mobileNavRoutes: AppRoute[];
}

export const MobileMenu = ({
  productLinkRoutes = undefined,
  mainNavPages = undefined,
  mobileNavRoutes,
}: MobileMenuProps): React.JSX.Element => {
  return (
    <MobileMenuShell>
      <Header productLinkRoutes={productLinkRoutes}>
        {mainNavPages && <MainNav mainNavPages={mainNavPages} />}
      </Header>

      <ScrollArea>
        <Box pt="4" px="4" pb="9">
          <MobileNav routes={mobileNavRoutes} />
        </Box>
      </ScrollArea>
    </MobileMenuShell>
  );
};
