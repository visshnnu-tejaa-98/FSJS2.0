// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

let autumn = ["September", "October", "November"];
let winter = ["December", "January", "February"];
let spring = ["March", "April", "May"];
let summer = ["June", "July", " August"];

let input = "March";

if (autumn.includes(input)) console.log("Autumn");
else if (winter.includes(input)) console.log("Winter");
else if (spring.includes(input)) console.log("Spring");
else if (summer.includes(input)) console.log("Summer");
