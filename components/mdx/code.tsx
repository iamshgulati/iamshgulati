import { Code as RTCode } from "@radix-ui/themes";
import type React from "react";

import { codeToHtml } from "~/lib/code-highlighter";
import { removeFinalBlankLine } from "~/lib/strings";

export const Code = async ({ ...props }): Promise<React.JSX.Element> => {
	const className: string | undefined = props.className as string | undefined;
	if (className) {
		const children: string = removeFinalBlankLine(props.children ? (props.children as string) : "");
		const language: string = className.replace("language-", "");
		const html = await codeToHtml({
			code: children,
			language: language,
		});

		return (
			<code
				className={className}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: dangerouslySetInnerHTML is required here
				dangerouslySetInnerHTML={{
					__html: html,
				}}
			/>
		);
	}

	return <RTCode {...props} />;
};
