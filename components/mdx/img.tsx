import { Box } from "@radix-ui/themes";
import type React from "react";
import { Image } from "../image";

/**
 * Image element for static site export
 */
export const Img = ({ ...props }: React.ComponentProps<"img">): React.JSX.Element => (
	<Box asChild my="7">
		<Image {...props} />
	</Box>
);
