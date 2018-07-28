/* eslint no-param-reassign: "off" */

/**
 *
 * @param {Array<{name: string, avgAlt: number}>} arr
 */
function orbitalPeriod(arr) {
  const gm = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  function getOrbitalPeriod(obj) {
    const c = (earthRadius + obj.avgAlt) ** 3;
    const b = Math.sqrt(c / gm);
    const orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  }

  arr.forEach(v => newArr.push(getOrbitalPeriod(v)));
  return newArr;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
