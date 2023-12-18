/**
 * Concatenates and returns a string of valid class names based on truthy values.
 * @param {...unknown[]} classNames - An array of values or expressions to evaluate for class names.
 * @returns {string} - Returns a string of concatenated valid class names.
 */
export const cn = (...classNames: unknown[]): string =>
  classNames.filter(Boolean).join(" ");
