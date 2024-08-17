import { Separator } from "@radix-ui/themes";
import type React from "react";

export const Hr = ({ ...props }): React.JSX.Element => (
	<Separator size="3" my="7" style={{ marginInline: "auto" }} {...props} />
);
