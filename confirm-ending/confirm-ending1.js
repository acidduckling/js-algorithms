/**
 * Test for values at the end of a given string
 * @param {string} str The string which will be tested for the last character
 * @param {string} target The character, or characters to test for
 */
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

console.log(confirmEnding('Clayton', 'n'));
