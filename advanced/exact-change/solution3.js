/* eslint prefer-destructuring: "off" */
/* eslint no-nested-ternary: "off" */

/** @param {number} price, @param {number} cash, @param {Array<Array<string, number>>} cashInDrawer  */
function checkCashRegister(price, cash, cashInDrawer) {
  let change = Math.round((cash - price) * 100);
  let value = 0;

  const changeRecord = [];
  const currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

  // convert all floats to integers to avoid floating point issues
  const drawer = cashInDrawer.map(el => [el[0], Math.round(el[1] * 100)]);

  // helper function to check if sufficient cash for change is in drawer
  const enoughFunds = cid => cid.filter((el, i) => change >= currency[i]).reduce((a, b) => a + b[1], 0);

  // Program/control starts here
  if (enoughFunds(drawer) < change) return 'Insufficient funds';
  if (enoughFunds(drawer) === change) return 'Closed';

  for (let i = drawer.length - 1; i > -1; i--) {
    value = 0;
    while (drawer[i][1] > 0 && change >= currency[i]) {
      change -= currency[i];

      drawer[i][1] -= currency[i];
      // value keeps track of each currency unit as change
      value += currency[i];
    }
    if (value) {
      changeRecord.push([drawer[i][0], value]);
    }
  }
  console.log(changeRecord);
  // divide each array by 100 to display in proper currency format
  return changeRecord.map(el => [el[0], Math.round(el[1] / 100)]);
}

console.log(
  checkCashRegister(10, 27, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90.0],
    ['FIVE', 55.0],
    ['TEN', 20.0],
    ['TWENTY', 60.0],
    ['ONE HUNDRED', 100.0],
  ]),
);
