import { calculateAge } from './calculateAge.js';

function displayAge(): void {
  const dateArray: Array<number> = calculateAge();
  const year:   number = dateArray[0];
  const month:  number = dateArray[1];
  const day:    number = dateArray[2];

  const yearElement = document.getElementById("display-year");
  const monthElement = document.getElementById("display-month");
  const dayElement = document.getElementById("display-day");

  // Manipulate DOM in HTML to display numbers
  yearElement!.innerHTML = String(year);
  monthElement!.innerHTML = String(month);
  dayElement!.innerHTML = String(day);
}
