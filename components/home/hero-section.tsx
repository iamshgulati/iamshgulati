import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import type React from "react";

import { siteConfig } from "~/config/site";
import { NextLink } from "~/lib/link";
import { Icons } from "../icons";
import styles from "./hero-section.module.css";

export const HeroSection = (): React.JSX.Element => (
	<Grid columns={{ initial: "1", md: "3" }} gapX="6" gapY={{ initial: "3", md: "4" }} mt="7">
		<Box className={styles.HeroHeadingContainer}>
			<HeroHeading>
				Hello! I&apos;m
				<br />
				Shubham Gulati,
			</HeroHeading>
		</Box>
		<Box className={styles.HeroPastExperienceContainer}>
			<StyledText>
				Software Engineer and Full-stack Developer. Past – Senior Consultant @ Deloitte Consulting.
			</StyledText>
		</Box>
		<Box className={styles.HeroCurrentlyContainer}>
			<StyledText>
				I have been told that I would make a great addition to any software development team.
			</StyledText>
			<StyledText mt={{ initial: "3", md: "4" }}>
				Don't trust me?{" "}
				<a
					href={`${siteConfig.links.linkedin}/details/recommendations/`}
					target="_blank"
					rel="noreferrer"
				>
					Read for yourself
				</a>
				.
			</StyledText>
		</Box>
		<Box className={styles.HeroCTADescription}>
			<StyledText>
				Here&apos;s many useless facts about me and a few <strong>less useless things</strong> that
				I can do.
			</StyledText>
		</Box>
		<Flex
			gap={{ initial: "3", xs: "5" }}
			mt="1"
			className={styles.HeroCTAButtonsContainer}
			style={{
				textAlign: "center",
			}}
		>
			<Button
				asChild
				size="3"
				style={{
					flexGrow: 1,
				}}
			>
				<a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
					<Icons.LinkedInLogoIcon width="18" height="18" aria-hidden />
					<Text style={{ textDecorationLine: "none" }}>LINKEDIN</Text>
				</a>
			</Button>
			<Button asChild size="3" variant="soft" style={{ flexGrow: 1 }}>
				<NextLink href="/work">
					<Text>WORK</Text>
					<ArrowRightIcon width="18" height="18" aria-hidden />
				</NextLink>
			</Button>
		</Flex>
	</Grid>
);

const HeroHeading = ({
	...props
}: React.ComponentPropsWithoutRef<typeof Heading>): React.JSX.Element => (
	<Heading
		as="h1"
		size={{ initial: "2", xs: "6", sm: "7", md: "8" }}
		style={
			{
				fontWeight: "600",
				// "--heading-letter-spacing": "-0.02em",
				"--heading-font-size-adjust": "3.4",
				lineHeight: "calc(var(--line-height) * var(--heading-font-size-adjust) * 0.9)",
			} as React.CSSProperties
		}
		{...props}
	/>
);

const StyledText = ({ ...props }: React.ComponentPropsWithoutRef<typeof Text>) => (
	<Text as="p" size={{ initial: "3", xs: "4", sm: "5" }} {...props} />
);
