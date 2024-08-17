import { Heading } from "@radix-ui/themes";
import type React from "react";

export const H4 = ({
	children = undefined,
	...props
}: React.PropsWithChildren): React.JSX.Element => (
	<Heading asChild size="4" mt="6" mb="3">
		<h4 style={{ scrollMarginTop: "var(--space-9)" }} {...props}>
			{children}
		</h4>
	</Heading>
);
