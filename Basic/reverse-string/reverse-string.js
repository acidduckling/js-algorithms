/**
 * Reverses a given string value
 * @param {string} str Input string to reverse
 */
function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

console.log(reverseString('hello'));
