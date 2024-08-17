import { Flex } from "@radix-ui/themes";
import type React from "react";

export const VStack = ({
	children = undefined,
	...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof Flex>>): React.JSX.Element => {
	return (
		<Flex direction="column" wrap="wrap" gap="3" mt="4" mb="4" {...props}>
			{children}
		</Flex>
	);
};

export const HStack = ({
	children = undefined,
	...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof Flex>>): React.JSX.Element => (
	<Flex direction="row" wrap="wrap" gap="3" {...props}>
		{children}
	</Flex>
);
