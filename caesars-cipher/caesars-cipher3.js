/**
 * Decode a rot13 encoded string (Caesar's Cipher, or Shift Cipher)
 * @param {string} str The string to decode
 */
function rot13(str) {
  return str.replace(/[A-Z]/g, l => String.fromCharCode((l.charCodeAt(0) % 26) + 65));
}

console.log(rot13('LBH QVQ VG!'));
