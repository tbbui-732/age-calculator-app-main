// global variables
const dayInMilliSeconds = 1000*60*60*24;
let currDate = new Date();
let currDay = currDate.getDate();
let currMonth = currDate.getMonth() + 1;
let currYear = currDate.getFullYear();

// reformat input to 'mm/dd/yyyy'
function reformatDate(day, month, year) {
  day = String(day);
  month = String(month);
  year = String(year);

  if (day < 10) 
    day = '0' + day;

  if (month < 10)
    month = '0' + month;

  return month + '/' + day + '/' + year;
}

// get number of days between DOB and the current date
function getDateDifferenceInDays(userDay, userMonth, userYear) {
  // reformat number to strings
  let bday = reformatDate(userDay, userMonth, userYear);
  let today = reformatDate(currDay, currMonth, currYear);

  // format string to 'Date' type
  let startDate = new Date(bday);
  let endDate = new Date(today);

  // convert difference in milliseconds to days
  let timeDifference = startDate.getTime() - endDate.getTime();
  let totalDays = Math.floor(Math.abs(timeDifference / dayInMilliSeconds));
  return totalDays;
}

// checks if a year is a leap year
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

// converts total number of days to an arr
//  consisting of number of year, months, and days
function convertDays(days) {
  let daysPerMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let years = days // 365.25;
  days %= 365.25;

  let year = 1;
  while (1) {
    let leapYear = isLeapYear(year);
    daysPerMonth[2] = leapYear ? 29 : 28

    for (let i = 1; i < 13; i++) {
      if (days >= daysPerMonth[i])
        days -= daysPerMonth[i];
      else
        return [years, i-1, days];

    }
    year += 1;
  }
}

// -- PUBLIC METHOD --
export function calculateAge() {
  let userDay = parseInt(document.getElementById("day").value);
  let userMonth = parseInt(document.getElementById("month").value);
  let userYear = parseInt(document.getElementById("year").value);

  let totalDays = getDateDifferenceInDays(userDay, userMonth, userYear); 
  let dateArray = convertDays(totalDays);

  return dateArray;
}
