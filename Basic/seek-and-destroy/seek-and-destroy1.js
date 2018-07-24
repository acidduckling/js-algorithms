/**
 * Removes elements from first array that also appear in the second array
 * @param {Array<number>} arr First array of numbers
 * @param {Array<number>} arr1 Second array of numbers
 */
function destroyer(arr, arr1) {
  const arrCopy = arr.slice();

  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arrCopy[i] === arr1[j]) delete arrCopy[i];
    }
  }
  return arrCopy.filter(Boolean);
}

const initialArr = [11, 23, 83, 41, 95, 36, 77, 81, 90];
const newArr = [11, 33, 88, 41, 77, 8, 4, 10];

console.log(destroyer(initialArr, newArr));
