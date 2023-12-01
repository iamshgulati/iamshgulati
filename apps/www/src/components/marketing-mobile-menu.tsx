import { Box, ScrollArea } from "@radix-ui/themes";

import { AllAppRoutes } from "~/lib/appRoutes";
import { Header } from "./header";
import { MainNav } from "./main-nav";
import { MobileMenu } from "./mobile-menu";
import { MobileNav } from "./mobile-nav";

export const MarketingMobileMenu = (): React.JSX.Element => {
  return (
    <MobileMenu>
      <Header>
        <MainNav pages={AllAppRoutes.home.pages} />
      </Header>

      <ScrollArea>
        <Box pt="4" px="4" pb="9">
          <MobileNav
            routes={[
              AllAppRoutes.home,
              AllAppRoutes.professional,
              AllAppRoutes.personal,
              AllAppRoutes.social,
              AllAppRoutes.legal,
            ]}
          />
        </Box>
      </ScrollArea>
    </MobileMenu>
  );
};
