import { Box, ScrollArea } from "@radix-ui/themes";

import { MarketingHeader } from "./marketing-header";
import { MobileMenu } from "./mobile-menu";
import { MobileNav } from "./mobile-nav";

export const MarketingMobileMenu = (): React.JSX.Element => {
  return (
    <MobileMenu>
      <MarketingHeader />

      <ScrollArea>
        <Box pt="4" px="4" pb="9">
          <MobileNav
            routes={[
              {
                pages: [
                  {
                    title: "Home",
                    slug: "/",
                  },
                  {
                    title: "About Me",
                    slug: "/about",
                  },
                  {
                    title: "Contact",
                    slug: "/contact",
                  },
                ],
              },
            ]}
          />
        </Box>
      </ScrollArea>
    </MobileMenu>
  );
};
