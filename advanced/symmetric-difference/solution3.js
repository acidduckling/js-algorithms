function sym(...args) {
  /** Return the symmetric difference of two arrays - using Sets as a Set will not contain duplicates
   * @param {Array<number>} a, @param {Array<number>} b */
  const diff = (a, b) => new Set([...a].filter(n => !b.has(n)));
  const result = args
    .map(arr => new Set(arr))
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  return [...result];
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
