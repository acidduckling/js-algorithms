/**
 * Sums all numbers in a range - including non specified inbetween numbers
 * @param {Array<number>} arr Array of numbers representing a range
 */
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([3, 1]));
console.log(sumAll([1, 4]));
