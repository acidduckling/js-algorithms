function sym(...args) {
  /** @param {Array<number>} arr1, @param {Array<number>} arr2 */
  function symDiff(arr1, arr2) {
    const result = [];
    arr1.forEach(item => !arr2.includes(item) && !result.includes(item) && result.push(item));
    arr2.forEach(item => !arr1.includes(item) && !result.includes(item) && result.push(item));
    return result;
  }

  return args.reduce(symDiff);
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
