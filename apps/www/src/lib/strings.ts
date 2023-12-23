export const removeDoubleLineBreaks = (text: string): string =>
  text.replace(/\n{2}/g, "\n");

export const removeFinalBlankLine = (text: string): string =>
  text.replace(/\s+$/, "");
