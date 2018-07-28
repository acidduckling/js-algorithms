/* eslint no-param-reassign: "off" */

/** @param {Array<any>} arr1, @param {Array<any>} arr2 */
function updateInventory(arr1, arr2) {
  let index;
  const arrCurrInvName = []; // names of arr1's items
  const arrNewInvName = []; // Names of arr2's items

  // same as using two for loops, this takes care of increasing the number of stock quantity
  arr1.forEach(item1 => arr2.forEach((item2) => {
    if (item1[1] === item2[1]) item1[0] += item2[0]; // Increase number of stock
  }));

  // Get items names for new inventory
  arr2.forEach(item => arrCurrInvName.push(item[1]));

  // Add current inventory items to current inventory
  arrNewInvName.forEach((item) => {
    if (arrCurrInvName.indexOf(item) < 0) {
      index = arrNewInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second array element as base
  arr1.sort((a, b) => (a[1] > b[1] ? 1 : -1));

  return arr1;
}

// Example
const currInv = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
const newInv = [[2, 'Hair Pin'], [3, 'Half-eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

console.log(updateInventory(currInv, newInv));
