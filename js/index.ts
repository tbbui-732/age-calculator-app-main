// GLOBAL VALUES
// Storing current date of program
const DAYS_PER_MONTH: Array<number> = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const dayInMilliseconds = 1000 * 60 * 60 * 24;
let currDate:   Date = new Date();
let currDay:    number = currDate.getDate();
let currMonth:  number = currDate.getMonth() + 1;
let currYear:   number = currDate.getFullYear();

// Reformat input to 'MM/DD/YYYY'
function reformatDate(day: number, month: number, year: number): string {
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
function getDateDifferenceInDays(userDay: number, userMonth: number, userYear: number): number {
  // Reformat number to string
  let bday: string = reformatDate(userDay, userMonth, userYear);
  let today: string = reformatDate(currDay, currMonth, currYear);
 
  // Format string to Date
  let startDate: Date = new Date(bday);
  let endDate: Date = new Date(today);
  
  // Convert time in milliseconds to days
  let timeDifference: number = startDate.getTime() - endDate.getTime(); // given in milliseconds
  let totalDays: number = Math.floor(Math.abs(timeDifference / dayInMilliseconds));

  return totalDays;
}

function isLeapYear(): boolean {
  return (this._year % 4 == 0 && this._year % 100 != 0) || (this._year % 400 == 0);
}

// Converts total number of days to [num_year, num_months, num_days]
function convertDays(): Array<number> {

}

function main() {
  let day: number = parseInt((<HTMLInputElement>document.getElementById("day")).value);
  let month: number = parseInt((<HTMLInputElement>document.getElementById("month")).value);
  let year: number = parseInt((<HTMLInputElement>document.getElementById("year")).value);
}
