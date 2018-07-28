/**
 * Returns the difference of two arrays
 * @param {Array<number>} arr1 Array of numbers
 * @param {Array<number>} arr2 Second array of numbers
 */
function diffArray(arr1, arr2) {
  /** @param {Array<number>} first, @param {Array<number>} second */
  const onlyInFirst = (first, second) => first.reduce((a, v) => (!second.some(v2 => v === v2) ? [...a, v] : a), []);
  return [...onlyInFirst(arr1, arr2), ...onlyInFirst(arr2, arr1)];
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));
