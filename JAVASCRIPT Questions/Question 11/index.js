// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let todayDate = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let secondsFrom1970 = date.getTime();

console.log("Year: ", year);
console.log("month: ", month);
console.log("todayDate: ", todayDate);
console.log("hours: ", hours);
console.log("minutes: ", minutes);
console.log("secondsFrom1970: ", secondsFrom1970);
