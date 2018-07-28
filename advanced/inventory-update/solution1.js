/* eslint no-param-reassign: "off" */

/** @param {Array<any>} arr1, @param {Array<any>} arr2 */
function updateInventory(arr1, arr2) {
  // Variable for location of product
  let index;
  const result = arr1.slice();

  // helper method to return index of a specified product. Undefined if not found
  function getProductIndex(name) {
    for (let i = 0; i < this.length; i++) {
      if (this[i][1] === name) return i;
    }
    return undefined;
  }

  // for each item of the new inventory
  for (let i = 0; i < arr2.length; i++) {
    index = getProductIndex.call(result, arr2[i][1]);

    // If the item does not exist
    if (index === undefined) result.push(arr2[i]);
    else result[index][0] += arr2[i][0];
  }
  // Sort aplhabetically by product name
  result.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });

  return result;
}

// Example
const currInv = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
const newInv = [[2, 'Hair Pin'], [3, 'Half-eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

console.log(updateInventory(currInv, newInv));
