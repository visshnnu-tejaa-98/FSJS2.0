// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ["INDIA", "USA", "CHINA", "ETHIOPIA"];

if (countries.includes("ETHIOPIA")) {
  console.log("ETHIOPIA");
} else {
  countries.push("ETHIOPIA");
  console.log(countries);
}
