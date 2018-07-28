/**
 * Sums all numbers in a range using Arithmetic Progression
 * @param {Array<number>} arr Array of numbers representing a range
 */
function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return (max - min + 1) * (min + max) / 2;
}


console.log(sumAll([3, 1]));
console.log(sumAll([1, 4]));
