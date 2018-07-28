/**
 * Returns the difference of two arrays
 * @param {Array<number>} arr1 Array of numbers
 * @param {Array<number>} arr2 Second array of numbers
 */
function diffArray(arr1, arr2) {
  return arr1.filter(el => !arr2.includes(el)).concat(arr2.filter(el => !arr1.includes(el)));
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));
