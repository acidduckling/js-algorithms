/**
 * Sums all numbers in a range - including non specified inbetween numbers
 * @param {Arrau<number>} arr Array of numbers representing a range
 */
function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let temp = 0;
  for (let i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

console.log(sumAll([3, 1]));
console.log(sumAll([1, 4]));
