import type { BundledLanguage, Highlighter } from "shiki";
import { getSingletonHighlighter } from "shiki";

const highlighter: Highlighter = await getSingletonHighlighter({
	themes: ["github-dark", "github-light"],
});

type codeToHtmlProps = {
	code: string;
	language: string;
};

export const codeToHtml = async ({ code, language }: codeToHtmlProps): Promise<string> => {
	if (language && !highlighter.getLoadedLanguages().includes(language)) {
		await highlighter.loadLanguage(language as BundledLanguage);
	}

	const html = highlighter.codeToHtml(code, {
		lang: language,
		themes: { dark: "github-dark", light: "github-light" },
		transformers: [
			{
				pre(node) {
					// @ts-expect-error
					node.type = "root";
				},
				code(node) {
					// @ts-expect-error
					node.type = "root";
				},
			},
		],
	});

	return html;
};
