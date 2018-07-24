/**
 * Finds the longest word in a sentence using reduce()
 * @param {string} str The sentence to process
 */
function findLongestWord(str) {
  return str
    .split(' ')
    .reduce((maxLength, currentWord) => Math.max(maxLength, currentWord.length), 0);
}

console.log(findLongestWord('the quick brown fox jumped over the lazy dog'));
