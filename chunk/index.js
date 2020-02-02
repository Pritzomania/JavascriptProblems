/* eslint-disable no-plusplus */
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const resultArray = [];
  let index = 0;
  while (index < array.length) {
    resultArray.push(array.slice(index, index + size));
    index += size;
  }

  return resultArray;
}

module.exports = chunk;

// function chunk(array, size) {
//   const resultArray = [];

//   for (const num of array) {
//     const last = resultArray[resultArray.length - 1];
//     if (!last || last.length === size) {
//       resultArray.push([num]);
//     } else {
//       last.push(num);
//     }
//   }
//   return resultArray;
// }

// function chunk(array, size) {
//   const resultArray = [];
//   let tempArray = [];

//   for (const num of array) {
//     if (tempArray.length === size) {
//       resultArray.push(tempArray);
//       tempArray = [];
//     }
//     tempArray.push(num);
//   }
//   console.log(resultArray);
//   if (tempArray.length) resultArray.push(tempArray);
//   return resultArray;
// }
