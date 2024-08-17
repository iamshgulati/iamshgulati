import * as RTCallout from "@radix-ui/themes/dist/esm/components/callout.js";
import type React from "react";

import type { Icon } from "~/components/icons";
import { Icons } from "~/components/icons";

type CalloutProps = React.PropsWithChildren<
	React.ComponentPropsWithoutRef<typeof RTCallout.Root>
> & {
	icon?: keyof typeof Icons;
};

export const Callout = ({
	icon = "InfoCircledIcon",
	children = undefined,
}: CalloutProps): React.JSX.Element => {
	const ComputedIcon: Icon = Icons[icon];
	return (
		<RTCallout.Root variant="surface" mt="5" mb="5">
			<RTCallout.Icon>
				<ComputedIcon />
			</RTCallout.Icon>
			<RTCallout.Text>{children}</RTCallout.Text>
		</RTCallout.Root>
	);
};
