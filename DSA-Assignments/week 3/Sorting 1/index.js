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

// Sort Array of Strings by Number of Vowels

// function to find the number of vowels in a string
function numberOfVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let count = 0;
  for (let char of str) {
    if (vowels.has(char)) count++;
  }

  return count;
}

// creating a swap function
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// cocktail shaker sort function to sort the array of strings
// by number of vowels in it.

function cocktailShakerSort(arr) {
  let swapped = true;
  let start = 0;
  let end = arr.length;

  while (swapped) {
    // reset the swapped flag on entering the loop, because it might be true from a previous iteration.
    swapped = false;

    // loop from bottom to top same as the bubble sort
    for (let i = start; i < end - 1; i++) {
      if (numberOfVowels(arr[i]) > numberOfVowels(arr[i + 1])) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    // if nothing moved, then array is sorted.
    if (!swapped) break;

    // otherwise, reset the swapped flag so that it can be used in the next stage
    swapped = false;

    // move the end point back by one, because item at the end is in its rightful spot
    end--;

    // from top to bottom, doing the same comparison as in the previous stage
    for (let i = end - 1; i >= start; i--) {
      if (numberOfVowels(arr[i]) > numberOfVowels(arr[i + 1])) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    // increase the starting point, because the last stage would have moved the next smallest number to its rightful spot.
    start++;
  }
}
