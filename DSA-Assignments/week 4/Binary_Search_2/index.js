// find peak
function findPeak(arr) {
  let n = arr.length;
  if (n === 1) {
    return 0;
  }
  if (arr[0] > arr[1]) {
    return 0;
  }
  if (arr[n - 1] > arr[n - 2]) {
    return n - 1;
  }
  let start = 1;
  let end = n - 2;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
//console.log(findPeak([1, 2, 1, 3, 5, 6, 4]));
// output : index 5 ,there are two peaks frst is index 1 =>(element 2) and second is index 5(element 6)
// tc : logn

// find median of two sorted arrays

function findMedianOfTwoSortedArrays(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let n = n1 + n2;
  if (n1 > n2) {
    return findMedianOfTwoSortedArrays(arr2, arr1);
  }
  let left = (n1 + n2 + 1) / 2;
  let low = 0,
    high = n1;
  while (low <= high) {
    let mid1 = (low + high) / 2;
    let mid2 = left - mid1;
    let l1, l2;
    let r1, r2;
    if (mid1 < n1) {
      r1 = arr1[mid1];
    }
    if (mid2 < n2) {
      r2 = arr2[mid2];
    }
    if (mid1 - 1 >= 0) {
      l1 = a[mid1 - 1];
    }
    if (mid2 - 1 >= 0) {
      l2 = arr2[mid2 - 1];
    }
    if (l1 <= r2 && l2 <= r1) {
      if (n % 2 === 1) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
      }
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return 0;
}

// horse race problem

function findMaxStrengthHorse(horses, K) {
  for (let i = 0; i < K; i++) {
    const winners = [];

    for (let j = 0; j < horses.length; j += 2) {
      if (j + 1 < horses.length) {
        const horse1 = horses[j];
        const horse2 = horses[j + 1];

        if (horse1 > horse2) {
          winners.push(horse1);
        } else {
          winners.push(horse2);
        }
      } else {
        winners.push(horses[j]);
      }
    }

    horses = winners;
  }

  const maxStrengthHorse = horses[0];
  return maxStrengthHorse;
}

// Example usage
// const horses = [10, 5, 8, 15, 7, 3];
// const K = 2;
// const maxStrengthHorse = findMaxStrengthHorse(horses, K);
// console.log("Horse with maximum strength value:", maxStrengthHorse);

// search a2d matrix

function searchA2DMatrix(m, n, arr, k) {
  let newArr = arr.flat();
  let low = 0;
  let high = m * n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;
    if (arr[row][col] === k) {
      return true;
    }
    if (arr[row][col] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// console.log(searchA2DMatrix(3, 4, arr, 12));
