/**
 * Test if first element of an array contains all the letters of the second letters of the array
 * @param {Array<string>} arr list of strings from which to test mutations
 */
function mutation(arr) {
  const target = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) return false;
  }
  return true;
}

console.log(mutation(['hello', 'Hello']));
console.log(mutation(['hello', 'hey']));
console.log(mutation(['Alien', 'line']));
