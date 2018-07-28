/**
 * Converts the given number to Roman Numerals
 * @param {number} num Number to convert
 */
function convertToRoman(num) {
  let num2 = num;
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let romanized = [];

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num2) {
      romanized += romanNumeral[i];
      num2 -= decimalValue[i];
    }
  }
  return romanized;
}

console.log(convertToRoman(36));
console.log(convertToRoman(97));
