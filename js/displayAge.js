import { calculateAge } from './calculateAge.js';

function displayAge() {
  const dateArray = calculateAge();
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  document.getElementById("display-year").innerHTML = String(year);
  document.getElementById("display-month").innerHTML = String(month);
  document.getElementById("display-day").innerHTML = String(day);
}
