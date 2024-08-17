import { Heading } from "@radix-ui/themes";
import type React from "react";

export const H1 = ({
	children = undefined,
	...props
}: React.PropsWithChildren): React.JSX.Element => (
	<Heading asChild size="8" mb="6">
		<h1 style={{ scrollMarginTop: "var(--space-9)" }} {...props}>
			{children}
		</h1>
	</Heading>
);
