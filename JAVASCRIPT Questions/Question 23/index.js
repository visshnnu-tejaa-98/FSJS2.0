// 23. Write a program to check that the number given by the user is a prime number or not.

let num = 7;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}
