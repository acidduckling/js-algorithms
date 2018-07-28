function sym(...args) {
  /** Return the symmetric difference of two arrays
   * @param {Array<number>} arr1, @param {Array<number>} arr2 */
  function getDiff(arr1, arr2) {
    // return items in arr1 that do not exist in arr2
    function filterFunction(arrA, arrB) {
      return arrA.filter(item => arrB.indexOf(item) < 0);
    }
    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
  }
  const symArray = args.reduce(getDiff, []);

  const unique = symArray.filter((val, index, arr) => index === arr.indexOf(val));
  return unique;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
