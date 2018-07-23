/**
 * Removes elements from first array that also appear in the second array
 * @param {Array<number>} arr First array of numbers
 * @param {Array<number>} arr2 Second array of numbers
 */
const destroyer = (arr, ...values) => {
  const args = arr.slice.call(values);
  return arr.filter(item => !args.includes(item));
};

const initialArr = [11, 23, 83, 41, 95, 36, 77, 81, 90];

console.log(destroyer(initialArr, 11, 33, 88, 41, 77, 8, 4, 10));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
