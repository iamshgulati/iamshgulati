import { Theme } from "@radix-ui/themes";
import type React from "react";

export const RadixThemesProvider = ({
	...props
}: React.ComponentProps<typeof Theme>): React.JSX.Element => (
	<Theme
		hasBackground
		accentColor="indigo"
		grayColor="slate"
		panelBackground="translucent"
		scaling="100%"
		radius="medium"
		appearance="inherit"
		{...props}
	/>
);
