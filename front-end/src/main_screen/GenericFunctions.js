/**
 * This function returns the correct suffix for
 * a day of the week to write ordinal numbers.
 * 
 * @param {int} day Day of the week as an integer
 * @returns Suffix for the day of the month
 */
export const getSuffix = (day) => {
    switch (day) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}
/**
 * This function converts an integer value representing the
 * current day to the string related to that day.
 * 
 * @param {int} day Day of the week as an integer
 * @returns A string corresponding to the day of the week
 */
export const getDayOfTheWeek = (day) => {
    switch (day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: break;
    }
} 

/**
 * This function converts an integer value representing the
 * current month to the string related to that month.
 * 
 * @param {int} m Month of the year as an integer
 * @returns A string corresponding to the month of the year
 */
export const getMonthName = (m) => {
    switch (m) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
        default: break;
    }
}

/**
 * This function add the eventual zero (0) before the minute
 * digit when it is less than 10.
 * 
 * @param {int} minutes minutes but without extension
 * @returns the correct representation of minutes on clocks
 */
export const extendMinutes = (minutes) => {
    if(minutes < 10)
    {
        return minutes = "0" + minutes;
    }
    return minutes;
}