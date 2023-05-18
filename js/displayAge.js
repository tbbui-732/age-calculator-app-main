"use strict";
exports.__esModule = true;
var calculateAge_js_1 = require("./calculateAge.js");
function displayAge() {
    var dateArray = (0, calculateAge_js_1.calculateAge)();
    var year = dateArray[0];
    var month = dateArray[1];
    var day = dateArray[2];
    var yearElement = document.getElementById("display-year");
    var monthElement = document.getElementById("display-month");
    var dayElement = document.getElementById("display-day");
    // Manipulate DOM in HTML to display numbers
    yearElement.innerHTML = String(year);
    monthElement.innerHTML = String(month);
    dayElement.innerHTML = String(day);
}
