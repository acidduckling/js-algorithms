/**
 * Finds the longest word in a sentence using sort()
 * @param {string} str The sentence to process
 */
const findLongestWord = str => str.split(' ').sort((a, b) => a.length < b.length)[0].length;

console.log(findLongestWord('the quick brown fox jumped over the lazy dog'));
