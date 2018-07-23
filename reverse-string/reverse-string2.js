/**
 * Reverses a given string value
 * @param {string} str Input string to reverse
 */
function reverseString(str) {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString('hello'));
