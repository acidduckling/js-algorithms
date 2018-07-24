/**
 * Decode a rot13 encoded string (Caesar's Cipher, or Shift Cipher)
 * @param {string} str The string to decode
 */
function rot13(str) {
  const rotCharArray = [];
  const regEx = /[A-Z]/;
  /* eslint no-param-reassign: "off" */
  str.split('').forEach((val) => {
    if (regEx.test(val)) {
      rotCharArray.push(((val.charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArray.push(val.charCodeAt());
    }
  });
  str = String.fromCharCode(...rotCharArray);
  return str;
}

console.log(rot13('LBH QVQ VG!'));
