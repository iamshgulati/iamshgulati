import { Box, Card, Flex, Grid, Heading, Inset, Link, Skeleton, Text } from "@radix-ui/themes";
import React from "react";

import { NextLink } from "~/lib/link";
import type { Frontmatter } from "~/types/frontmatter";
import { Img } from "./mdx/img";
import { PageMetaText } from "./page-meta-text";

type PagePreviewCardProps = React.ComponentPropsWithoutRef<typeof Card> &
	Pick<Frontmatter, "slug" | "title" | "description" | "publishedAt" | "image" | "pinned">;

export const PagePreviewCard = ({
	slug,
	title,
	description = undefined,
	publishedAt = undefined,
	image = undefined,
	pinned = false,
	variant = "surface",
	...props
}: PagePreviewCardProps): React.JSX.Element => (
	<Card asChild size="3" variant={variant} {...props}>
		<NextLink href={slug}>
			{image ? (
				<Grid columns={{ initial: "1", sm: "2" }} width="100%">
					<Inset
						clip="padding-box"
						side={{ initial: "top", sm: "left" }}
						pb={{ initial: "current", sm: "0" }}
						pr={{ initial: "0", sm: "current" }}
					>
						<Skeleton loading={true}>
							<Img
								src={image}
								alt={title}
								style={{
									display: "block",
									objectFit: "cover",
									width: "100%",
									height: "100%",
									backgroundColor: "var(--gray-3)",
									boxShadow: "0 0 0 1px var(--gray-3)",
									borderRadius: "0",
								}}
							/>
						</Skeleton>
					</Inset>
					<Flex justify="between" direction="column" height="100%">
						<PagePreview
							title={title}
							description={description}
							publishedAt={publishedAt}
							pinned={pinned}
						/>
					</Flex>
				</Grid>
			) : (
				<Flex justify="between" direction="column" height="100%">
					<PagePreview
						title={title}
						description={description}
						publishedAt={publishedAt}
						pinned={pinned}
					/>
				</Flex>
			)}
		</NextLink>
	</Card>
);

const PagePreview = ({
	title,
	description = undefined,
	publishedAt = undefined,
	pinned = false,
}: Pick<Frontmatter, "title" | "description" | "publishedAt" | "pinned">): React.JSX.Element => (
	<React.Fragment>
		<Box position="absolute" width="100%">
			<PageMetaText size="2" publishedAt={publishedAt} pinned={pinned} />
		</Box>
		<Box my="7">
			<Heading size={{ initial: "5", sm: "6" }} mb="2">
				{title}
			</Heading>
			<Text as="p" size={{ initial: "3", sm: "4" }} color="gray">
				{description}
			</Text>
		</Box>
		<Link asChild>
			<Text size="2">Read more →</Text>
		</Link>
	</React.Fragment>
);
