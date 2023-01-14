// Write a program to print all the prime number between 0 to 100 (0 and 100 included).
// program to print prime numbers between the two numbers

const limit = 100;
let result = [];
for (let i = 0; i <= limit; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (i > 1 && flag == 0) {
    result.push(i);
  }
}

console.log(result);
