import { differenceInDays, format, formatISO, isValid } from "date-fns";

export const formatDateISO = (date: string): string => {
  if (isValid(new Date(date))) {
    return formatISO(new Date(date), { representation: "date" });
  }

  return date;
};
export const formatDate = (date: string): string => {
  if (isValid(new Date(date))) {
    return format(new Date(formatDateISO(date)), "MMMM d, yyyy");
  }

  return date;
};

export const formatDateRelative = (date: string): string => {
  if (isValid(new Date(date))) {
    const days = differenceInDays(new Date(), new Date(date));
    if (days > 30) {
      return formatDate(date);
    }

    if (days > 1) {
      return `${days} days ago`;
    }

    if (days === 1) {
      return `Yesterday`;
    }

    if (days === 0) {
      return `Today`;
    }
  }

  return date;
};

/*
export const formatDateShort = (date: string): string => {
  if (isValid(new Date(date))) {
    return format(new Date(formatDateISO(date)), "MMM d, yyyy");
  }

  return date;
};
*/
