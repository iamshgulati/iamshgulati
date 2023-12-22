import type { BundledLanguage, Highlighter } from "shikiji";
import { getHighlighter } from "shikiji";

const highlighter: Highlighter = await getHighlighter({
  themes: ["github-dark", "github-light"],
});

export const highlight = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}): Promise<string> => {
  if (lang && !highlighter.getLoadedLanguages().includes(lang)) {
    await highlighter.loadLanguage(lang as BundledLanguage);
  }
  return highlighter.codeToHtml(code, {
    themes: { dark: "github-dark", light: "github-light" },
    lang: lang,
  });
};
