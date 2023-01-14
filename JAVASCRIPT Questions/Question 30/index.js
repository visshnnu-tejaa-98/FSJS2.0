// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let calculator = (a, b) => {
  let addition = a + b;
  let substract = a - b;
  let product = a * b;
  let division = a / b;
  console.log("addition", addition);
  console.log("substract", substract);
  console.log("product", product);
  console.log("division", division);
};

calculator(10, 5);
