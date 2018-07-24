/**
 * Finds the longest word in a sentence
 * @param {string} str The sentence to process
 */
function findLongestWord(str) {
  const words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) maxLength = words[i].length;
  }
  return maxLength;
}

console.log(findLongestWord('the quick brown fox jumped over the lazy dog'));
