const numArray = [
  [583, 999, 113, 55],
  [600, 187, 798, 444],
  [1023, 77, 832, 285],
  [83, 99, 113, 555],
];

/**
 * Get the highest number embedded within sub arrays
 * @param {Array<Array<number>>} arr Array of number Arrays
 */
function largestNumbers(arr) {
  // return arr.map(Function.apply.bind(Math.max, null));
  return arr.map(i => Math.max(...i));
}

console.log(largestNumbers(numArray));
