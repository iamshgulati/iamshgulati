/**
 * Formats a given date or string representation of a date into a full date string.
 * @param {(string | Date)} date - The date or string representation of a date to format.
 * @returns {string} - Returns the formatted full date string in "Month day, year" format (e.g., "January 1, 2023").
 */
export const formatFullDate = (date: string | Date): string => {
  if (date instanceof Date) {
    date = date.toISOString();
  }

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  return targetDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

/**
 * Formats a given date or string representation of a date into a short date string.
 * @param {(string | Date)} date - The date or string representation of a date to format.
 * @returns {string} - Returns the formatted full date string in "Month day, year" format (e.g., "Jan 1, 2023").
 */
export const formatShortDate = (date: string | Date): string => {
  if (date instanceof Date) {
    date = date.toISOString();
  }

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  return targetDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

/**
 * Formats a given date or string representation of a date into a relative date string.
 * @param {(string | Date)} date - The date or string representation of a date to format.
 * @returns {string} - Returns the formatted relative date string (e.g., "2 years ago", "3 months ago", "Yesterday", "Today").
 */
export const formatRelativeDate = (date: string | Date): string => {
  if (date instanceof Date) {
    date = date.toISOString();
  }

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const currentDate = new Date();
  const pastDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - pastDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - pastDate.getMonth();
  const daysAgo = currentDate.getDate() - pastDate.getDate();

  return yearsAgo > 0
    ? `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`
    : monthsAgo > 0
      ? `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`
      : daysAgo > 1
        ? `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`
        : daysAgo === 1
          ? "Yesterday"
          : "Today";
};
