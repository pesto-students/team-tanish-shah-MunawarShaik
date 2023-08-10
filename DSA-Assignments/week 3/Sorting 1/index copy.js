// sort an array of numbers in ascending order using bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // output  [11, 12, 22, 25, 34, 64, 90]

// sort an array of numbers in descending order using quick sort

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
//console.log(quickSort([-1, 4, 7, 3, -2, 5])); // output [7, 5, 4, 3, -1, -2]

// Sort Array of Strings Alphabetically

function selectionSortStrings(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
// console.log(selectionSortStrings(["banana", "apple", "grape", "cherry"]));
// output  ['apple', 'banana', 'cherry', 'grape']

// Sort Array of Strings by Length in Descending Order
