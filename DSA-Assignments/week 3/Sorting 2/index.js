// Counting Sort - Sort Array of Positive Integers in Ascending Order

function countingSort(arr) {
  let max = Math.max(...arr);

  // filling the aux array with zeros
  let aux = new Array(max + 1).fill(0);

  // count of each element in aux array

  for (let i = 0; i < arr.length; i++) {
    aux[arr[i]]++;
  }

  let output = [];
  for (let i = 0; i < aux.length; i++) {
    while (aux[i] > 0) {
      output.push(i);
      aux[i]--;
    }
  }
  return output;
}
// console.log(countingSort([1, 2, 3, 6, 1, 2, 4, 5, 6, 8]));
// output [1, 1, 2, 2, 3, 4, 5, 6, 6, 8]

// Implement Bucket Sort

function bucketSort(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);
  return [...even, ...odd];
}
//console.log(bucketSort([3, 5, 4, 2, 6, 9, 8]));
// output [2, 4, 6, 8, 3, 5, 9]

// Shell Sort for Sorting Dates

function shellSortOfDates(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let timestampInMS = new Date(arr[i]).getTime();
    //console.log(timestampInMS);
    const timestampInSecs = Math.floor(timestampInMS / 1000);
    output.push(timestampInSecs);
  }
  output.sort((a, b) => a - b);
  let result = output.map((date) => {
    let newDate = new Date(date * 1000);
    let dateString = newDate
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, ""); // Format as "YYYY-MM-DD HH:mm:ss"
    return dateString;
  });
  return result;
}

// console.log(
//   shellSortOfDates([
//     "2023-07-03 12:30:15",
//     "2023-07-03 10:15:00",
//     "2023-07-02 18:45:30",
//     "2023-07-01 20:00:00",
//   ])
// );
// output -- ["2023-07-01 14:30:00", "2023-07-02 13:15:30",
// "2023-07-03 04:45:00","2023-07-03 07:00:15"]

// mergeSortDates

function mergeSortDates(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSortDates(left), mergeSortDates(right));
  // console.log(mid, left, right);
}
function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
// console.log(
//   mergeSortDates([
//     "2022 - 03 - 15",
//     "2023 - 01 - 01",
//     "2022 - 12 - 31",
//     "2022 - 05 - 20",
//   ])
// );
// output :: ['2022 - 03 - 15', '2022 - 05 - 20', '2022 - 12 - 31', '2023 - 01 - 01']

// need  to do Topological Sort algorithm
