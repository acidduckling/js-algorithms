/* eslint prefer-destructuring: "off" */

// Object that holds the denominations and their values
const denom = [
  { name: 'ONE HUNDRED', val: 100.0 },
  { name: 'TWENTY', val: 20.0 },
  { name: 'TEN', val: 10.0 },
  { name: 'FIVE', val: 5.0 },
  { name: 'ONE', val: 1.0 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 },
];

/** @param {number} price, @param {number} cash, @param {Array<Array<string, number>>} cashInDrawer  */
function checkCashRegister(price, cash, cashInDrawer) {
  let change = cash - price;
  // transform cashInDrawer array into drawer object
  const register = cashInDrawer.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 },
  );

  // handle the exact change
  if (register.total < change) return 'Insufficient funds';

  const changeArr = denom.reduce((acc, curr) => {
    let value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // round change to nearest hundreth - desals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used
    if (value > 0) {
      acc.push([curr.name], value);
    }
    // return the current change array
    return acc;
  }, []);

  // if no elementds in changeArr or we have no leftover change, return 'Insufficent funds'
  return changeArr.length < 1 || change > 0 ? 'Insufficient funds' : changeArr;
}

console.log(
  checkCashRegister(19.5, 20.0, [
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
