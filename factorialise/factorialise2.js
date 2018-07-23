/**
 * Return or the factorials of a given number.
 * Factorial numbers are typically denoted by !5, !10, !20 etc
 * A factorial is the product of all the positive integeres that precede the number
 * @param {number} num Number to be factorialised
 */
function factorialize(num) {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0)); // The factorial of 0 must always be 1
