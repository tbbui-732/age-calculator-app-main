// GLOBAL VALUES
// Storing current date of program
const dayInMilliseconds = 1000 * 60 * 60 * 24;
let currDate:   Date = new Date();
let currDay:    number = currDate.getDate();
let currMonth:  number = currDate.getMonth() + 1;
let currYear:   number = currDate.getFullYear();

// Reformat input to 'MM/DD/YYYY'
function _reformatDate(day: number, month: number, year: number): string {
  let newDay: string;
  let newMonth: string;
  let newYear: string;

  if (day < 10)
    newDay= '0' + String(day);
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
function _getDateDifferenceInDays(userDay: number, userMonth: number, userYear: number): number {
  // Reformat number to string
  let bday: string = _reformatDate(userDay, userMonth, userYear);
  let today: string = _reformatDate(currDay, currMonth, currYear);

  // Format string to Date
  let startDate: Date = new Date(bday);
  let endDate: Date = new Date(today);

  // Convert time in milliseconds to days
  let timeDifference: number = startDate.getTime() - endDate.getTime(); // given in milliseconds
  let totalDays: number = Math.floor(Math.abs(timeDifference / dayInMilliseconds));

  return totalDays;
}

function _isLeapYear(year: number): boolean {
  return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

// Converts total number of days to [num_year, num_months, num_days]
function _convertDays(days: number) {
  let daysPerMonth: Array<number> = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let years: number = days // 365.25;
  days %= 365.25;

  let year: number = 1;
  while (1) {
    let leapYear: boolean = _isLeapYear(year);
    if (leapYear)
      daysPerMonth[2] = 29;
    else
      daysPerMonth[2] = 28;

    for (let i = 1; i < 13; i++) {
      if (days >= daysPerMonth[i])
        days -= daysPerMonth[i];
      else
        return [years, i-1, days];

    }
    year += 1;
  }

  return null;
}

// PUBLIC METHOD
// Returns the date as [YYYY, MM, DD] Array<number>
export function calculateAge(): any {
  let userDay: number   = parseInt((<HTMLInputElement>document.getElementById("day")).value);
  let userMonth: number = parseInt((<HTMLInputElement>document.getElementById("month")).value);
  let userYear: number  = parseInt((<HTMLInputElement>document.getElementById("year")).value);

  let numDays: number = _getDateDifferenceInDays(userDay, userMonth, userYear); 
  let dateArray: any = _convertDays(numDays);

  if (dateArray == null) {
    console.log("Unable to convert total number of days into a date");
    return;
  }

  return dateArray;
}
