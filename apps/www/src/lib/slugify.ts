/**
 * Convert a string to a URL-friendly slug.
 * @param {string} input - The string to convert into a slug.
 * @returns {string} - Returns the slugified version of the input string.
 */
export const slugify = (input: string): string => {
  return input
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word characters except for -
    .replace(/--+/g, "-"); // Replace multiple - with single -
};
