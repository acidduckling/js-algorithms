/**
 * Repeat a given string a specified number of times
 * @param {string} str The string to be repeated
 * @param {number} num The number of times to repeat
 */
function repeatStringNumTimes(str, num) {
  /* eslint no-param-reassign: "off" */
  const result = num > 0 ? str += repeatStringNumTimes(str, --num) : str;
  return result;
}

console.log(repeatStringNumTimes('shit', 20));
