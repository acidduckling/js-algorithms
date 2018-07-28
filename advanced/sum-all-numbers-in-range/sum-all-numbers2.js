/**
 * Sums all numbers in a range - including non specified inbetween numbers
 * @param {Array<number>} arr Array of numbers representing a range
 */
function sumAll(arr) {
  arr.sort((a, b) => a - b);
  const firstNum = arr[0];
  const lastNum = arr[arr.length - 1];
  const sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

console.log(sumAll([3, 1]));
console.log(sumAll([1, 4]));
