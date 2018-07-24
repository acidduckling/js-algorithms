/**
 * Returns an array of chunked data into specified sizes
 * @param {Array<any>} arr Array of values to be chunked
 * @param {number} size The size of the returned array chunks
 */
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
