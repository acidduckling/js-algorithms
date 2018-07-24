/**
 * Decode a rot13 encoded string (Caesar's Cipher, or Shift Cipher)
 * @param {string} str The string to decode
 */
function rot13(str) {
  return str.split('').map.call(str, (char) => {
    const x = char.charCodeAt(0);
    // CHeck if character lies between A-Z
    if (x < 65 || x > 90) return String.fromCharCode(x);
    // N = ASCII 78, if char code is less, shift forward 13 places
    if (x < 78) return String.fromCharCode(x + 13);
    // Otherwise shift 13 character places backwards
    return String.fromCharCode(x - 13);
  }).join('');
}

console.log(rot13('LBH QVQ VG!'));
