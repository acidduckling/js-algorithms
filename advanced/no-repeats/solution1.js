/**
 * Return the total number of permuataions of the provided string that do not have repeated consecutive letters
 * @param {string} str String to search for permutations
 */
function permAlone(str) {
  // CReate a regex to match the repeated consecutive characters
  const regex = /(.)\1+/g;

  // split the string into an array of characters
  const arr = str.split('');
  const permutations = [];
  let tmp;

  // Return 0 if str contains the same character
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Swap variables' content
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of the permutations using Heap's algorithm for permutations
  // https://en.wikipedia.org/wiki/Heap%27s_algorithm
  function generate(int) {
    if (int === 1) {
      // make sure to join characters as we create the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (let i = 0; i !== int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // filter the array of permuutations & return how many have no repetitions
  return permutations.filter(string => !string.match(regex)).length;
}

console.log(permAlone('aba'));
