import { Box, ScrollArea } from "@radix-ui/themes";
import React from "react";


type PreProps = React.PropsWithChildren<
	Omit<React.ComponentPropsWithoutRef<typeof Box>, "as"> & React.ComponentPropsWithoutRef<"pre">
>;

export const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
	{ className = undefined, children = undefined, ...props },
	forwardedRef,
): React.JSX.Element {
	return (
		<ScrollArea>
			<Box asChild {...props}>
				<pre ref={forwardedRef} className={className}>
					{children}
				</pre>
			</Box>
		</ScrollArea>
	);
});
