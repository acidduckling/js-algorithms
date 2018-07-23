/**
 * Inserts a number into a provided array at the appropriate position
 * @param {Array<number>} arr Array of numbers to find insertion point
 * @param {number} num Number to insert into array
 */
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }
  return arr.length;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([40, 60], 500));
