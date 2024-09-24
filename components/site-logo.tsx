import { Flex, Text } from "@radix-ui/themes";
import type React from "react";

import { siteConfig } from "~/config/site";
import type { Icon } from "./icons";
import { YinYangIcon } from "./icons";

export const SiteLogoIcon = ({
	...props
}: React.ComponentPropsWithoutRef<Icon>): React.JSX.Element => {
	return (
		<Flex align="center">
			<YinYangIcon width="22" height="22" {...props} />
		</Flex>
	);
};

export const SiteLogo = ({ ...props }: React.ComponentPropsWithoutRef<Icon>): React.JSX.Element => {
	return (
		<Flex align="center" gap="2">
			<YinYangIcon width="22" height="22" {...props} />
			<Text trim="both" style={{ fontSize: "18px", fontWeight: "650", letterSpacing: "0.01em" }}>
				{siteConfig.title}
			</Text>
		</Flex>
	);
};
