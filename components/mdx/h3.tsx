import { Heading } from "@radix-ui/themes";
import type React from "react";

import { LinkHeading } from "~/components/link-heading";

export const H3 = ({
	children = undefined,
	...props
}: React.PropsWithChildren): React.JSX.Element => (
	<Heading asChild size="5" mt="7" mb="2">
		<h3 {...props}>
			<LinkHeading style={{ scrollMarginTop: "var(--space-9)" }}>{children}</LinkHeading>
		</h3>
	</Heading>
);
