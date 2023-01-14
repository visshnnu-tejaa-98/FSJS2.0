//Write a program which tells the number of days in a month.

let monthNumber = 2;
let days_31 = [1, 3, 5, 7, 8, 10, 12];
let days_30 = [4, 6, 9, 11];
let days_28 = [2];
if (monthNumber > 12 || monthNumber <= 0)
  console.log("Enter valid Month Number");
else if (days_31.includes(monthNumber)) console.log("31 Days");
else if (days_30.includes(monthNumber)) console.log("30 Days");
else if (days_28.includes(monthNumber)) console.log("28 Days");
