/**
 * Test if first element of an array contains all the letters of the second letters of the array
 * @param {Array<string>} arr list of strings from which to test mutations
 */
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1);
}

console.log(mutation(['hello', 'Hello']));
console.log(mutation(['hello', 'hey']));
console.log(mutation(['Alien', 'line']));
