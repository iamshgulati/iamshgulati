"use client";

import { Box } from "@radix-ui/themes";
import type React from "react";

import { useScrollState } from "~/hooks/useScrollState";

type HeaderShellProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof Box>> & {
	viewportScrollFactorThreshold?: number;
	scrollDistanceThreshold?: number;
};

export const HeaderShell = ({
	viewportScrollFactorThreshold = undefined,
	scrollDistanceThreshold = undefined,
	children = undefined,
	className = undefined,
}: HeaderShellProps): React.JSX.Element => {
	return (
		<Box
			data-scroll-state={
				useScrollState({
					scrollDistanceThreshold: 30,
				}).scrollState
			}
			data-delayed-scroll-state={
				useScrollState({
					viewportScrollFactorThreshold,
					scrollDistanceThreshold,
				}).scrollState
			}
			className={className}
		>
			{children}
		</Box>
	);
};
