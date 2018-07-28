/**
 * Returns the difference of two arrays
 * @param {Array<number>} arr1 Array of numbers
 * @param {Array<number>} arr2 Second array of numbers
 */
function diffArray(arr1, arr2) {
  const newArr = [];
  const ordArr = arr1.concat(arr2).sort();

  for (let i = 0; i < ordArr.length; i++) {
    if (ordArr[i] !== ordArr[i + 1] && ordArr[i] !== ordArr[i - 1]) newArr.push(ordArr[i]);
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));
