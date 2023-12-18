export const cn = (...classNames: unknown[]) =>
  classNames.filter(Boolean).join(" ");
