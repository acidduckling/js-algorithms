/**
 * Converts a string sentence to Title Case
 * @param {string} str The string to be converted to title case
 */
function titleCase(str) {
  return str
    .split(' ')
    .map(word => (word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ''))
    .join(' ');
}

console.log(titleCase('this is a test'));
console.log(titleCase(' WHat a MESS!'));
console.log(titleCase('TEST'));
console.log(titleCase(''));
