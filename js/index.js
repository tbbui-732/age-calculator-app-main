// global variables
const dayInMilliSeconds = 1000*60*60*24;
const currDate = new Date();
const currDay = currDate.getDate();
const currMonth = currDate.getMonth() + 1;
const currYear = currDate.getFullYear();
const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
const displayDayElement = document.getElementById("display-day");
const displayMonthElement = document.getElementById("display-month");
const displayYearElement = document.getElementById("display-year");

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

function getDateArray(userDay, userMonth, userYear) {
  // reformat number to strings
  let bday = reformatDate(userDay, userMonth, userYear);
  let today = reformatDate(currDay, currMonth, currYear);

  // format string to 'Date' type
  let startDate = new Date(bday);
  let endDate = new Date(today);

  // convert difference in milliseconds to days
  let timeDifference = startDate.getTime() - endDate.getTime();
  let totalDays = Math.floor(Math.abs(timeDifference / dayInMilliSeconds));

  // convert days to array of [year, month, day]
  let daysPerMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let years = Math.floor(totalDays / 365.25);
  totalDays %= 365.25;

  let year = 1;
  while (1) {
    let isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    daysPerMonth[2] = isLeapYear ? 29 : 28

    for (let i = 1; i < 13; i++) {
      if (totalDays >= daysPerMonth[i])
        totalDays -= daysPerMonth[i];
      else
        return [years, i-1, totalDays];
    }

    year += 1;
  }
}

// -- PUBLIC METHOD --
function calculateAndDisplayAge() {
  // Calculate the user's age
  let userDay = parseInt(dayElement.value);
  let userMonth = parseInt(monthElement.value);
  let userYear = parseInt(yearElement.value);
  let dateArray = getDateArray(userDay, userMonth, userYear);

  // Display the user's age
  // TODO: fix so that the number also changes color as well
  displayYearElement.innerHTML = String(dateArray[0]);
  displayMonthElement.innerHTML = String(dateArray[1]);
  displayDayElement.innerHTML = String(dateArray[2]);

  console.log("Calculated user's age");
}
