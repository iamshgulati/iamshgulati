export function cn(...arr: unknown[]) {
  return arr.filter(Boolean).join(" ");
}
