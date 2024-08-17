/**
 * Formats a given date into a localized string based on the provided locale and format options.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string | Date} params.date - The date to be formatted. Can be a string or a Date object.
 * @param {Intl.LocalesArgument} [params.locale="en-US"] - The locale to use for formatting. Defaults to "en-US".
 * @param {Intl.DateTimeFormatOptions} [params.formatOptions] - The options for formatting the date. Defaults to:
 *   {
 *     month: "long",
 *     day: "numeric",
 *     year: "numeric",
 *     timeZone: "UTC"
 *   }
 * @returns {string} - The formatted date string, for example: "January 1, 1970".
 */
export const formatDate = ({
	date,
	locale = "en-US",
	formatOptions = {
		month: "long",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	},
}: {
	date: string | Date;
	locale?: Intl.LocalesArgument;
	formatOptions?: Intl.DateTimeFormatOptions;
}): string => {
	const isoDate = date instanceof Date ? date.toISOString() : date;
	const dateWithTime = isoDate.includes("T") ? isoDate : `${date}T00:00:00`;
	return new Date(dateWithTime).toLocaleString(locale, formatOptions);
};

/**
 * Formats a given date or string representation of a date into a relative date string.
 * @param {Object} params - The parameters for the function.
 * @param {string | Date} params.date - The date to be formatted. Can be a string or a Date object.
 * @returns {string} - The formatted date string, for example "2 years ago", "3 months ago", "Yesterday", "Today".
 */
export const formatRelativeDate = ({ date }: { date: string | Date }): string => {
	const isoDate = date instanceof Date ? date.toISOString() : date;
	const dateWithTime = isoDate.includes("T") ? isoDate : `${date}T00:00:00`;

	const currentDate = new Date();
	const pastDate = new Date(dateWithTime);

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
