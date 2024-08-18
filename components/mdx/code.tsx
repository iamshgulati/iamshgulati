import { Code as RTCode } from "@radix-ui/themes";

export const Code = ({ ...props }) => {
	// if it's a codeblock (``` block in markdown), it'll have a data-language prop from shiki
	const isInlineCode = props["data-language"] === undefined;
	if (isInlineCode) {
		return <RTCode {...props} />;
	}
	return <code {...props} />;
};
