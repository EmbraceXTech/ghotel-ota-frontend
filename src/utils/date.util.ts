import { DAY_OF_WEEK } from "@/constants/date.constant";

export const getDayOfWeek = (dateString: Date | string) => {
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return DAY_OF_WEEK[dayIndex];
}