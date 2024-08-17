import { Blockquote as RTBlockquote } from "@radix-ui/themes";
import type React from "react";

export const Blockquote = ({ ...props }): React.JSX.Element => (
	<RTBlockquote
		my="7"
		style={{
			fontStyle: "italic",
		}}
		{...props}
	/>
);
