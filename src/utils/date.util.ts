import { DAY_OF_WEEK } from "@/constants/date.constant";

export const getDayOfWeek = (dateString: Date | string) => {
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return DAY_OF_WEEK[dayIndex];
};

export const formatDateWithOutTime = (dateString: Date | string) =>
  new Date(dateString).toISOString().split("T")[0];

export const diffDate = (
  dateString1: Date | string,
  dateString2: Date | string
) => {
  const diffInMilliseconds = Math.abs(
    new Date(dateString1).getTime() - new Date(dateString2).getTime()
  );
  
  const daysDifference = Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
  return daysDifference;
};

export const formatDate = (dateString: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'short' as const, day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
};