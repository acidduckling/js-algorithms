/**
 * Removes falsey values from an array
 * @param {Array<any>} arr ARray which will have all falsey values removed
 */
const bouncer = arr => arr.filter(Boolean);

const falsyArr = [0, 1, 2, 3, null, 5, '', 7, 8, undefined, 10, NaN, 12, 13, false];

console.log(bouncer(falsyArr));
