"use client";

import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

type BackButtonProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof Button>>;

export const BackButton = ({
	children = undefined,
	style = undefined,
	...props
}: BackButtonProps): React.JSX.Element => {
	const router = useRouter();

	return (
		<Button variant="ghost" style={{ ...style }} onClick={() => router.back()} {...props}>
			{children ?? (
				<React.Fragment>
					<ChevronLeftIcon />
					Back
				</React.Fragment>
			)}
		</Button>
	);
};
