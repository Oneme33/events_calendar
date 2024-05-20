import dayjs from 'dayjs';
import 'dayjs/locale/nl'; // Import the Dutch locale

dayjs.locale('nl'); // Set the Dutch locale globally

/**
 * Formats a date string to a Dutch date format.
 * @param date The date string to format.
 * @returns The formatted date string in Dutch.
 */
export const formatDutchDate = (date: string): string => {
  return dayjs(date).format('dddd, D MMMM YYYY'); // Format the date as "Maandag, 30 oktober 2023"
};

/**
 * Delays the execution of the subsequent code by a specified number of milliseconds.
 * This function returns a promise that resolves after the given delay, effectively pausing the execution flow.
 * 
 * @param ms The number of milliseconds to delay execution.
 * @returns A promise that resolves after the specified delay, allowing the use of `await` for synchronous-like behavior.
 */
export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};