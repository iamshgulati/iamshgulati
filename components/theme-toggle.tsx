import { IconButton } from "@radix-ui/themes";
import React from "react";

import type { Icon } from "./icons";
import { ThemeIcon } from "./theme-icon";
import { ThemeToggleShell } from "./theme-toggle-shell";

type ThemeToggleProps = React.ComponentPropsWithoutRef<typeof IconButton> & {
	iconProps?: React.ComponentProps<Icon>;
};

export const ThemeToggle = ({
	iconProps = undefined,
	...props
}: ThemeToggleProps): React.JSX.Element => {
	return (
		<React.Fragment>
			<ThemeToggleShell>
				<IconButton size="3" variant="ghost" color="gray" {...props}>
					<ThemeIcon iconProps={iconProps} />
				</IconButton>
			</ThemeToggleShell>
			{/* <UpdateThemeClasses /> */}
		</React.Fragment>
	);
};
