/**
 * Returns an array of chunked data into specified sizes
 * @param {Array<any>} arr Array of values to be chunked
 * @param {number} size The size of the returned array chunks
 */
function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];
  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) {
      temp.push(arr[a]);
    } else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);

  return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
