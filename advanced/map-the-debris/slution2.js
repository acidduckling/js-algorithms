/* eslint no-param-reassign: "off" */

/**
 *
 * @param {Array<{name: string, avgAlt: number}>} arr
 */
function orbitalPeriod(arr) {
  const gm = 398600.4418;
  const earthRadius = 6367.4447;

  arr.forEach((val) => {
    const orbitalPer = Math.round(2 * Math.PI * Math.sqrt(((val.avgAlt + earthRadius) ** 3) / gm));

    delete val.avgAlt;
    val.orbitalPeriod = orbitalPer;
  });

  return arr;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
