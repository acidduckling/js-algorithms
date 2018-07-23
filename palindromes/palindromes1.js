/**
 * Check the given string if it is a palindrome (string reads the same forward and in reverse
 * - eg. "mum" or "race car")
 * @param {string} str String to test
 */
function palindrome(str) {
  const spaceRemoved = str.replace(' ', '').toLowerCase();
  return spaceRemoved === spaceRemoved.split('').reverse().join('');
}

console.log('test: ', palindrome('aabaa'));
console.log('mum: ', palindrome('mum'));
console.log('not a palindrome: ', palindrome('not a palindrome!'));
console.log('Race Car: ', palindrome('Race Car'));
