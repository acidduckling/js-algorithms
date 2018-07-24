const numArray = [
  [583, 999, 113, 55],
  [600, 187, 798, 444],
  [1023, 77, 832, 285],
  [83, 99, 113, 555],
];

/**
 * Get the highest number embedded within sub arrays
 * @param {Array<Array<number>>} arr Array of number Arrays
 */
function largestNumbers(arr) {
  const results = [];
  for (let n = 0; n < arr.length; n++) {
    let largestNumber = arr[n][0];
    for (let sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) largestNumber = arr[n][sb];
    }
    results[n] = largestNumber;
  }
  return results;
}

console.log(largestNumbers(numArray));
