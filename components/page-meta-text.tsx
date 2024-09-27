import { DrawingPinIcon } from "@radix-ui/react-icons";
import { Badge, Flex, Text } from "@radix-ui/themes";
import React from "react";

import { formatDate, formatRelativeDate } from "~/lib/date";
import type { Frontmatter } from "~/types/frontmatter";

export const PageMetaText = ({
	publishedAt = undefined,
	pinned = false,
	size = { initial: "2", sm: "3" },
	...props
}: React.ComponentPropsWithoutRef<typeof Text> &
	Pick<Frontmatter, "publishedAt" | "pinned">): React.JSX.Element => (
	<React.Fragment>
		{publishedAt ? (
			<Flex align="center" justify="between">
				<Flex asChild gap="2" wrap="wrap">
					<Text size={size} color="gray" {...props}>
						<time dateTime={publishedAt}>{formatDate({ date: publishedAt })}</time>
						&middot;
						<time dateTime={publishedAt}>{formatRelativeDate({ date: publishedAt })}</time>
					</Text>
				</Flex>
				{pinned && <DrawingPinIcon color="var(--gray-a11)" />}
			</Flex>
		) : (
			<Badge variant="surface">draft</Badge>
		)}
	</React.Fragment>
);
