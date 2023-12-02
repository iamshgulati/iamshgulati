import { Box, ScrollArea } from "@radix-ui/themes";

import type { Route } from "~/lib/routes";
import { Header } from "./header";
import { MobileMenuShell } from "./mobile-menu-shell";
import { MobileNav } from "./mobile-nav";

interface MobileMenuProps {
  productLinkRoutes?: Route[];
  routes: Route[];
}

export const MobileMenu = ({
  productLinkRoutes = undefined,
  routes,
}: MobileMenuProps): React.JSX.Element => {
  return (
    <MobileMenuShell>
      <Header productLinkRoutes={productLinkRoutes} />

      <ScrollArea>
        <Box pt="4" px="4" pb="9">
          <MobileNav routes={routes} />
        </Box>
      </ScrollArea>
    </MobileMenuShell>
  );
};
