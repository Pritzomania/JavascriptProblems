// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// [10,3,12,5,9]
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minVal = arr[i];
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < minVal) {
        minVal = arr[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
