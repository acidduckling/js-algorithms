/**
 * Returns the difference of two arrays
 * @param {Array<number>} arr1 Array of numbers
 * @param {Array<number>} arr2 Second array of numbers
 */
function diffArray(arr1, arr2) {
  const newArr = [];
  /** @param {Array<number>} first, @param {Array<number>} second */
  function onlyFirstIn(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) newArr.push(first[i]);
    }
  }
  onlyFirstIn(arr1, arr2);
  onlyFirstIn(arr2, arr1);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));
