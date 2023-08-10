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

function heapSortDescendingByLength(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left].length > arr[largest].length) {
    largest = left;
  }

  if (right < n && arr[right].length > arr[largest].length) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, n, largest);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
heapSortDescendingByLength(stringArray);
console.log(stringArray); // Output: ['elderberry', 'banana', 'cherry', 'apple', 'date']

// need to do Sort Array of Strings by Number of Vowels
