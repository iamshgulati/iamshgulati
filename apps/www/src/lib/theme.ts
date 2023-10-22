export const isServer = typeof window === "undefined";
export const getTheme = (key: string, fallback?: string) => {
  if (isServer) return undefined;
  let theme;
  try {
    theme = localStorage.getItem(key) ?? undefined;
  } catch (e) {
    // Unsupported
  }
  return theme ?? fallback;
};
