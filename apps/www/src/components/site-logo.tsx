import { Flex } from "@radix-ui/themes";

import { Icons } from "./icons";

export function SiteLogoIcon(): React.JSX.Element {
  return (
    <Flex asChild align="center">
      <Icons.SiteLogoIcon width="24" height="24" />
    </Flex>
  );
}

export function SiteLogo(): React.JSX.Element {
  return (
    <Flex align="center" gap="2">
      <Icons.SiteLogoIcon width="24" height="24" />
      {/* <Text
        as="span"
        weight="bold"
        size="4"
        trim="both"
        style={{
          letterSpacing: "var(--letter-spacing-6)",
        }}
      >
        {siteConfig.name}
      </Text> */}
    </Flex>
  );
}
