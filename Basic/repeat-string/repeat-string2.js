/**
 * Repeat a given string a specified number of times
 * @param {string} str The string to be repeated
 * @param {number} num The number of times to repeat
 */
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

console.log(repeatStringNumTimes('shit', 20));
