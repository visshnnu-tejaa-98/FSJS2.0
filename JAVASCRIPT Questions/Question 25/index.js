// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

const bmi = (weight, height) => {
  let result = weight / (height * height);
  console.log(result);
  if (result < 18.5) return "Underweight";
  else if (result >= 18.5 && result < 24.9) return "Normal";
  else if (result >= 25 && result < 29.9) return "Over weigtt";
  else if (result >= 30) return "Obese";
};

console.log(bmi(90, 2.2));
