// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();
let type1 = `${date.toISOString().split("T")[0]} ${date
  .toISOString()
  .split("T")[1]
  .split(":")
  .slice(0, 2)
  .join(":")}`;

let type2 = `${date
  .toISOString()
  .split("T")[0]
  .split("-")
  .reverse()
  .join("-")} ${date
  .toISOString()
  .split("T")[1]
  .split(":")
  .slice(0, 2)
  .join(":")}`;

let type3 = `${date
  .toISOString()
  .split("T")[0]
  .split("-")
  .reverse()
  .join("/")} ${date
  .toISOString()
  .split("T")[1]
  .split(":")
  .slice(0, 2)
  .join(":")}`;
console.log("YYYY-MM-DD HH:mm ==>", type1);
console.log("DD-MM-YYYY HH:mm ==>", type2);
console.log("DD/MM/YYYY HH:mm ==>", type3);
