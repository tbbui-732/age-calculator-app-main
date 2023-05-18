// GLOBAL VALUES
// Storing current date of program
var dayInMilliseconds = 1000 * 60 * 60 * 24;
var currDate = new Date();
var currDay = currDate.getDate();
var currMonth = currDate.getMonth() + 1;
var currYear = currDate.getFullYear();
// Reformat input to 'MM/DD/YYYY'
function reformatDate(day, month, year) {
    var newDay;
    var newMonth;
    var newYear;
    if (day < 10)
        newDay = '0' + String(day);
    else
        newDay = String(day);
    if (month < 10)
        newMonth = '0' + String(month);
    else
        newMonth = String(month);
    newYear = String(year);
    return newMonth + '/' + newDay + '/' + newYear;
}
// Get number of days between birthday and current day
function getDateDifferenceInDays(userDay, userMonth, userYear) {
    // Reformat number to string
    var bday = reformatDate(userDay, userMonth, userYear);
    var today = reformatDate(currDay, currMonth, currYear);
    // Format string to Date
    var startDate = new Date(bday);
    var endDate = new Date(today);
    // Convert time in milliseconds to days
    var timeDifference = startDate.getTime() - endDate.getTime(); // given in milliseconds
    var totalDays = Math.floor(Math.abs(timeDifference / dayInMilliseconds));
    return totalDays;
}
function _isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
// Converts total number of days to [num_year, num_months, num_days]
function convertDays(days) {
    var daysPerMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var years = days; // 365.25;
    days %= 365.25;
    var year = 1;
    while (1) {
        var leapYear = _isLeapYear(year);
        if (leapYear)
            daysPerMonth[2] = 29;
        else
            daysPerMonth[2] = 28;
        for (var i = 1; i < 13; i++) {
            if (days >= daysPerMonth[i])
                days -= daysPerMonth[i];
            else
                return [years, i - 1, days];
        }
        year += 1;
    }
    return null;
}
function main() {
    var userDay = parseInt(document.getElementById("day").value);
    var userMonth = parseInt(document.getElementById("month").value);
    var userYear = parseInt(document.getElementById("year").value);
    var numDays = getDateDifferenceInDays(userDay, userMonth, userYear);
    var dateArray = convertDays(numDays);
    if (dateArray == null) {
        console.log("Unable to convert total number of days into a date");
        return;
    }
    return dateArray;
}
// --- MAIN ---
main();
