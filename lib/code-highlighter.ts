import type { BundledLanguage, Highlighter } from "shikiji";
import { getHighlighter } from "shikiji";

const highlighter: Highlighter = await getHighlighter({
  themes: ["github-dark", "github-light"],
});

type codeToHtmlProps = {
  code: string;
  language: string;
};

export const codeToHtml = async ({
  code,
  language,
}: codeToHtmlProps): Promise<string> => {
  if (language && !highlighter.getLoadedLanguages().includes(language)) {
    await highlighter.loadLanguage(language as BundledLanguage);
  }

  const html = highlighter.codeToHtml(code, {
    lang: language,
    themes: { dark: "github-dark", light: "github-light" },
    transformers: [
      {
        pre(node) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          node.type = "root";
        },
        code(node) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          node.type = "root";
        },
      },
    ],
  });

  return html;
};
