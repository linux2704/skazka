import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const getDay = (day: string) => {
  let days = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  //@ts-ignore
  let idx = days[day.toLowerCase().substr(0, 3)];
  let today = new Date();
  // Zero time and copy today
  let then = new Date(today.setHours(0, 0, 0, 0));
  // Set then to day in current week
  then.setDate(then.getDate() - then.getDay() + idx);
  // If then is before today, add 7 days. Otherwise, return then
  return then < today ? new Date(then.setDate(then.getDate() + 7)) : then;
};

export const getExactDay = (day: string) => {
  const q = getDay(day);
  return format(q, "d LLLL", { locale: ru });
};

export const getDayTitle = (day: string) => {
  const q = getDay(day);
  return format(q, "eeee", { locale: ru });
};
