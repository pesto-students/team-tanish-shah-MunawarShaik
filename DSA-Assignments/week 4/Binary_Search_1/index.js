// find The Last Occurance of element
function findTheLastOccurance(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let n = arr.length;
  function findLast(arr, low, high, k) {
    if (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if ((mid == n - 1 || k < arr[mid + 1]) && arr[mid] == k) {
        return mid;
      } else if (k < arr[mid]) {
        return findLast(arr, low, mid - 1, k);
      } else {
        return findLast(arr, mid + 1, high, k);
      }
      return -1;
    }
  }

  return findLast(arr, low, high, k);
}
// console.log(findTheLastOccurance([1, 2, 3, 3, 4, 5], 3)); // output 4

// Get Square root

function getSquareRoot(start, end, k) {
  let ans = 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    //let mid = start + Math.floor((end - start) / 2);
    if (mid * mid <= k) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans.toFixed(6);
}
// let number = 16;
// let start = 1;
// let end = number;
// console.log(getSquareRoot(start, end, number)); output 4.000000

// is target present
function isTargetPresent(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(isTargetPresent(arr, 0, arr.length - 1, 11)); // outout 7

// K-th Element of Two Sorted Arrays

function kthElementOfArray(arr1, arr2, k) {
  let combined = [...arr1, ...arr2];
  combined.sort((a, b) => a - b);
  console.log(combined);
  let start = 0;
  let end = combined.length - 1;
  let ans;
  function kthElement(arr, start, end, k) {
    while (start <= end) {
      let mid = Math.floor((end + start) / 2);
      // console.log(`start is ${start}`);
      // console.log(`mid is ${mid}`);
      // console.log(`end is ${end}`);
      // console.log(`target is ${k}`);
      if (mid === k) {
        // console.log(`arr[mid] is ${arr[mid]}`);
        return arr[mid];
      }
      if (mid < k) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
  ans = kthElement(combined, start, end, k);
  return ans;
}

// console.log(kthElementOfArray([3, 2, 4, 1, 6], [5, 7, 9, 8, 11], 7)); // output 8
// console.log(kthElementOfArray([13, 22, 4, 11, 6], [5, 17, 9, 3, 1], 7)); // output 13

// Min in rotated array

function minInRotatedArray(arr) {
  let n = arr.length;
  let low = 0,
    high = n - 1;
  let ans = +Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      high = mid - 1;
      ans = Math.min(ans, arr[mid]);
    }
  }
  return ans;
}
//console.log(minInRotatedArray([4, 5, 6, 7, 0, 1, 2])); // output 0
