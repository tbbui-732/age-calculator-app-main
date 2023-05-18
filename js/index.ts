// Get the current date
const CURR_DATE: Date = new Date();
const DAY: number   = CURR_DATE.getDate();
const MONTH: number = CURR_DATE.getMonth() + 1; // increment since month index starts at 0
const YEAR: number  = CURR_DATE.getFullYear();

// Returns user age in an array
function calculateAge(): Array<number> {
  let day: number = parseInt((<HTMLInputElement>document.getElementById("day")).value);
  let month: number = parseInt((<HTMLInputElement>document.getElementById("month")).value);
  let year: number = parseInt((<HTMLInputElement>document.getElementById("year")).value);
  
  

};
