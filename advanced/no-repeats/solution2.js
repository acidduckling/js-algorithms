/**
 * Return the total number of permuataions of the provided string that do not have repeated consecutive letters
 * @param {string} str String to search for permutations
 */
function permAlone(str) {
  const regex = /(.)\1/;

  function permutation(p, o) {
    if (o.length) {
      let sum = 0;
      for (let i = 0; i < p.length + 1; i++) {
        sum += permutation(
          p
            .slice(0, i)
            .concat(o[0])
            .concat(p.slice(i)),
          o.slice(1),
        );
      }
      return sum;
    }
    return !regex.test(p.join(''));
  }

  return permutation([], str.split(''));
}

console.log(permAlone('aba'));
