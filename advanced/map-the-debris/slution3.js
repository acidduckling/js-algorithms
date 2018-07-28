/* eslint no-param-reassign: "off" */

/**
 *
 * @param {Array<{name: string, avgAlt: number}>} arr
 */
function orbitalPeriod(arr) {
  const gm = 398600.4418;
  const earthRadius = 6367.4447;

  arr.forEach((v) => {
    // Calculate the orbital period value
    const tmp = Math.round(2 * Math.PI * Math.sqrt(((earthRadius + v.avgAlt) ** 3) / gm));

    delete v.avgAlt;
    v.orbitalPeriod = tmp;
  });
  return arr;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
