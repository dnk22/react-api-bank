import { format, formatDistanceToNow, differenceInMilliseconds, isDate, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';

// define variable
const ONE_MINUTE = 60;
const ONE_HOUR = 60 * 60;
const ONE_DAY = 60 * 60 * 24;
// const ONE_MONTH = 60 * 60 * 24 * 30;
// const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * format local date by date-fns
 */
export const formatDateLocal = (
  date: Date | number,
  formatType: string = 'dd/MM/yyyy',
  local: any = vi,
) => {
  if (!isDate(new Date(date))) return '';
  return format(new Date(date), formatType, { locale: local });
};

export const formatDateStringLocal = (
  date: string,
  formatType: string = 'dd/MM/yyyy',
  local: any = vi,
) => {
  return format(parseISO(date), formatType, local);
};

/**
 * Return the distance between the given date and now in words.
 */
type TTimeAgo = {
  unit?: string;
  locale?: Locale;
  localeMatcher?: string;
  numeric?: string;
  style?: string;
};

export const getFormatDistanceToNow = (date: Date | number, options?: TTimeAgo): string => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: vi,
    ...options,
  });
};

/**
 * Return the distance between the given future date and now in words.
 */
export const getCountDownBetweenDate = (
  targetDateTime: Date | number | string,
): { [name: string]: number } | number => {
  const diffInMilliSeconds = differenceInMilliseconds(new Date(targetDateTime), new Date());
  if (diffInMilliSeconds <= 0) {
    return 0;
  }
  const days = Math.floor(diffInMilliSeconds / (1000 * ONE_DAY));
  const hours = Math.floor((diffInMilliSeconds % (1000 * ONE_DAY)) / (1000 * ONE_HOUR));
  const minutes = Math.floor((diffInMilliSeconds % (1000 * ONE_HOUR)) / (1000 * ONE_MINUTE));
  const seconds = Math.floor((diffInMilliSeconds % (1000 * ONE_MINUTE)) / 1000);

  return { Ngày: days, Giờ: hours, Phút: minutes, Giây: seconds };
};

/**
 * Return today or not
 */

export const isPassedDate = (date: string | Date | number) => {
  return new Date(date).getTime() <= new Date().getTime();
};
// export const dayBetweenRange = ({
//   endDate,
//   startDate,
//   format = 'DD/MM/YYYY',
// }: {
//   startDate?: string;
//   endDate?: string;
//   format?: string;
// }) => {
//   const mStartDate = moment(startDate, format);
//   const mEndDate = moment(endDate, format);
//   return mEndDate.diff(mStartDate, 'days') + 1;
// };

// /**
//  * Return list days between 2 date.
//  */
// function daysFromTo(a: Moment | Date, b: Moment | Date) {
//   const days = [];
//   // convert moment to time. moment().getTime()
//   let localFrom = +a;
//   const localTo = +b;
//   for (
//     ;
//     localFrom <= localTo;
//     localFrom = moment(localFrom).add(1, 'day').toDate().getTime()
//   ) {
//     days.push(moment(localFrom));
//   }
//   return days;
// }

// /**
//  * Return list days in month
//  */
// function daysInMonth(_date: string | Date | Moment | number) {
//   const date = moment(_date).toDate();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const days = new Date(year, month + 1, 0).getDate();

//   const firstDay = new Date(year, month, 1, 0, 0, 0);
//   const lastDay = new Date(year, month, days, 0, 0, 0);

//   return daysFromTo(firstDay, lastDay);
// }

// /**
//  * Get list days by month. Maybe has pre month, next month.
//  */
// export function getDaysByMonth(
//   mDate: string | Date | Moment | number,
//   firstDayOfWeek: number,
//   showSixWeeks?: boolean,
// ) {
//   const days = daysInMonth(mDate);
//   let before: Moment[] = [];
//   let after: Moment[] = [];
//   // calculate first day of week(ex: firstDayOfWeek > 7)
//   const fdow = (7 + firstDayOfWeek) % 7 || 7;
//   // calculate last day of week by first day of week
//   const ldow = (fdow + 6) % 7;
//   const from = moment(days[0]);
//   const daysBefore = from.day();

//   if (from.day() !== fdow) {
//     // subtract if current date not equals first day of week
//     from.add(-(from.day() + 7 - fdow) % 7, 'day');
//   }

//   const to = moment(days[days.length - 1]);
//   const day = to.day();
//   if (day !== ldow) {
//     // add if lasted date not equals last day of week
//     to.add((ldow + 7 - day) % 7, 'day');
//   }

//   const daysForSixWeeks = (daysBefore + days.length) / 6 >= 6;
//   // check size days pluss days before divide 6 enough or not 6 weeks
//   if (showSixWeeks && !daysForSixWeeks) {
//     to.add(7, 'day');
//   }
//   if (from.isBefore(moment(days[0]), 'days')) {
//     before = daysFromTo(from, days[0]);
//   }
//   if ((to.isAfter(days[days.length - 1]), 'days')) {
//     after = daysFromTo(days[days.length - 1], to);
//   }
//   return before.concat(days.slice(1, days.length - 1), after);
// }
