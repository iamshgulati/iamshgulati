import { Box, Container, Grid, Section } from "@radix-ui/themes";
import type { Metadata } from "next";
import type React from "react";

import { PagePreviewCard } from "~/components/page-preview-card";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { dynamicRoutes, staticRoutes } from "~/lib/routes";
import { getBaseUrl } from "~/lib/url";
import type { Frontmatter } from "~/types/frontmatter";

const ogImageUrl: string = ogImageApi({
	title: staticRoutes.blog.label,
});

export const metadata: Metadata = {
	title: staticRoutes.blog.label,
	description: staticRoutes.blog.description,
	openGraph: {
		title: staticRoutes.blog.label,
		description: staticRoutes.blog.description,
		url: `${getBaseUrl()}${staticRoutes.blog.slug}`,
		siteName: siteConfig.title,
		locale: siteConfig.locale,
		type: "website",
		images: [
			{
				url: ogImageUrl,
				width: 1920,
				height: 1080,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: staticRoutes.blog.label,
		description: staticRoutes.blog.description,
		images: [ogImageUrl],
	},
};

export default function BlogPage(): React.JSX.Element {
	return (
		<Section size={{ initial: "2", md: "4" }}>
			<Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
				<Box my="7">
					<PageTitleAndDescription
						title={staticRoutes.blog.label}
						description={staticRoutes.blog.description}
					/>
				</Box>
				<Grid columns={{ initial: "1", md: "2" }} gap="6">
					{dynamicRoutes.blog.pages?.map((page: Frontmatter) => (
						<PagePreviewCard
							key={page.slug}
							slug={page.slug}
							title={page.title}
							description={page.description}
							publishedAt={page.publishedAt}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	);
}
