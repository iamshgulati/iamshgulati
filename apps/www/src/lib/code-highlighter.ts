import type { BundledLanguage, Highlighter } from "shikiji";
import { getHighlighter } from "shikiji";

const highlighter: Highlighter = await getHighlighter({
  themes: ["github-dark", "github-light"],
});

export const highlight = async ({
  code,
  language,
}: {
  code: string;
  language: string;
}): Promise<string> => {
  if (language && !highlighter.getLoadedLanguages().includes(language)) {
    await highlighter.loadLanguage(language as BundledLanguage);
  }
  return highlighter.codeToHtml(code, {
    themes: { dark: "github-dark", light: "github-light" },
    lang: language,
  });
};
