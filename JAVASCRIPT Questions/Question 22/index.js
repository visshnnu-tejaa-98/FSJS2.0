// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// Min and Max
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let result = ages.sort((a, b) => a - b);
console.log("Min Age is,", result[0]);
console.log("Max Age is,", result[result.length - 1]);

// Median
let agesMedian = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let mid =
  agesMedian.length % 2 !== 0
    ? Math.floor(agesMedian.length / 2)
    : [agesMedian.length / 2, agesMedian.length / 2 + 1];
console.log("Median is", mid);

// Average
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}
let avg = sum / ages.length;
console.log("Avg,", avg);

// Find the range of the ages(max minus min)
let min = result[0];
let max = result[result.length - 1];
console.log("Range,", max - min);

// Compare the value of (min - average) and (max - average), use abs() method
console.log("Compare, using abs", Math.abs(min - avg - (max - avg)));
