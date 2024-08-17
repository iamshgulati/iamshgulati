import { Badge } from "@radix-ui/themes";
import type React from "react";

import styles from "./screen-size-indicator.module.css";

export const ScreenSizeIndicator = (): React.JSX.Element => (
	<Badge
		size="1"
		variant="soft"
		color="gray"
		radius="full"
		aria-label="Screen Size Indicator"
		style={{
			position: "fixed",
			bottom: "2px",
			left: "2px",
			zIndex: "20",
			pointerEvents: "none",
		}}
		className={styles.ScreenSizeIndicator}
	/>
);
