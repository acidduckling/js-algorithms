/**
 * Return the sum of all pair indexes that add to the value arg
 * @param {Array<number>} arr Array of numbers from which pairs will be found
 * @param {number} arg The number which the pairs must sum to
 */
function pairwise(arr, arg) {
  // create empty array to keep arrays we will add.
  const index = [];

  // loop to check the first number
  arr.forEach((val, i) => {
    arr.some(
      (val2, j) => (val + val2 === arg && j > i && index.indexOf(+i) === -1 && index.indexOf(+j) === -1
        ? Boolean(index.push(+i, +j))
        : false),
    );
  });

  return index.length >= 1 ? index.reduce((a, b) => a + b) : 0;
}

console.log(pairwise([7, 9, 11, 13, 15], 20));
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
