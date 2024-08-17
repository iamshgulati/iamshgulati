import { Heading } from "@radix-ui/themes";
import type React from "react";

import { LinkHeading } from "~/components/link-heading";
import styles from "./h2.module.css";

export const H2 = ({
	children = undefined,
	...props
}: React.PropsWithChildren): React.JSX.Element => (
	<Heading asChild size="6" mt="7" mb="2" className={styles.H2}>
		<h2 {...props}>
			<LinkHeading style={{ scrollMarginTop: "var(--space-9)" }}>{children}</LinkHeading>
		</h2>
	</Heading>
);
