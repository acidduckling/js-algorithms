/* eslint no-param-reassign: "off" */

/** @param {Array<any>} arr1, @param {Array<any>} arr2 */
function updateInventory(arr1, arr2) {
  let flag = 0;
  arr2.forEach((item) => {
    flag = 0;
    arr1.forEach((list) => {
      // if product is already present increase the quantity
      if (item[1] === list[1]) {
        list[0] += item[0];
        flag = 1;
      }
    });

    // if not already present, add product
    if (flag === 0) arr1.push(item);
  });

  // return sorted inventory by product name
  return arr1.sort((a, b) => (a[1] > b[1] ? 1 : -1));
}

// Example
const currInv = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
const newInv = [[2, 'Hair Pin'], [3, 'Half-eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

console.log(updateInventory(currInv, newInv));
