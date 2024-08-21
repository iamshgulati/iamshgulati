import { Text } from "@radix-ui/themes";
import type React from "react";

import styles from "./li.module.css";

export const Li = ({ ...props }): React.JSX.Element => (
	<Text asChild>
		<li className={styles.ListItem} {...props} />
	</Text>
);
