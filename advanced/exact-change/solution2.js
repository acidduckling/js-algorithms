/* eslint prefer-destructuring: "off" */
/* eslint no-nested-ternary: "off" */

/** @param {number} price, @param {number} cash, @param {Array<Array<string, number>>} cashInDrawer  */
function checkCashRegister(price, cash, cashInDrawer) {
  const values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let change = cash * 100 - price * 100;
  let allCash = true;

  const moneyBack = cashInDrawer.reduce((p, c, i) => {
    const out = Math.min(change - (change % values[i]), c[1] * 100);
    change -= out;
    if (out !== c[1] * 100) allCash = false;
    return out ? p.concat([[c[0], out / 100]]) : p;
  }, []);

  return change > 0 ? 'Insufficient funds' : allCash ? 'Closed' : moneyBack;
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
