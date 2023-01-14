// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****

/*
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
let num1 = 5;
for (let i = 0; i < num1; i++) {
  let array = [];
  for (let j = 0; j < num1; j++) {
    array.push("* ");
  }
  console.log(array.join(""));
}

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
let num2 = 5;
for (let i = 0; i <= num2; i++) {
  let array = [];
  for (let j = 0; j <= num2; j++) {
    if (i > j) {
      array.push("* ");
    } else {
      array.push("  ");
    }
  }
  console.log(array.join(""));
}

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

let num3 = 5;
let string = "";
for (let i = 1; i <= num3; i++) {
  for (let j = 1; j <= num3 - i; j++) {
    string += "  ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
