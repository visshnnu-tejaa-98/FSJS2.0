// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age:");
if (age >= 18) alert("You are old enough to drive");
else alert(`Wait for ${18 - age} more year(s) to turn 18 years`);
