import React from "react";

import { cn } from "~/lib/classnames";
import { codeToHtml } from "~/lib/code-highlighter";
import styles from "./code-block.module.css";
import { CopyTextButton } from "./copy-text-button";
import { Pre } from "./pre";

type CodeBlockProps = Omit<React.ComponentProps<typeof Pre>, "css"> & {
	language: string;
	value: string;
	_line?: string;
	isInteractive?: boolean;
	showLineNumbers?: boolean;
	showCopyCodeButton?: boolean;
};

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
	async (_props, forwardedRef): Promise<React.JSX.Element> => {
		const {
			language,
			value,
			_line = "0",
			className = "",
			style = undefined,
			showLineNumbers = undefined,
			showCopyCodeButton = true,
			...props
		} = _props;

		const html = await codeToHtml({
			code: value,
			language: language,
		});

		return (
			<Pre
				ref={forwardedRef}
				className={cn(styles.CodeBlockContainer, className)}
				style={{ ...style }}
				data-line-numbers={showLineNumbers}
				{...props}
			>
				<code
					className={cn(`language-${language}`, className)}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: dangerouslySetInnerHTML is required
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				{showCopyCodeButton && <CopyTextButton textToCopy={value} className={styles.CopyButton} />}
			</Pre>
		);
	},
);

CodeBlock.displayName = "CodeBlock";
