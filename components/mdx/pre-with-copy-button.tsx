"use client";

import React from "react";

import { removeFinalBlankLine } from "~/lib/strings";
import { CopyTextButton } from "./copy-text-button";
import { Pre } from "./pre";

export const PreWithCopyButton = ({ ...props }): React.JSX.Element => {
	const [code, setCode] = React.useState<string>();

	return (
		<React.Fragment>
			<Pre
				ref={(node: HTMLPreElement | null): void => {
					if (node) {
						const codeElement: HTMLElement | null = node.querySelector("code");
						setCode(removeFinalBlankLine(codeElement?.innerText ?? ""));
					}
				}}
				{...props}
			/>
			<CopyTextButton textToCopy={code} />
		</React.Fragment>
	);
};
