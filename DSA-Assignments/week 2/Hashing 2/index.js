// check for duplicates

function checkForDuplicates(arr) {
  let map = new Map();
  let containsDuplicate = false;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      containsDuplicate = true;
    } else {
      map.set(arr[i], 1);
    }
  }
  return containsDuplicate
    ? "There are duplicate elements in the array"
    : "There are no duplicate elements in the array";
}

// find first non repitative character in a string

function findNonRepitativeCharacter(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  //console.log(map);

  for (let [key, val] of map) {
    if (val === 1) {
      return key;
    }
  }
}

// four sum

function fourSum(arr, target) {
  let n = arr.length;
  arr = arr.sort((a, b) => a - b);
  // console.log(arr)
  let resultArray = [];
  for (let i = 0; i < n - 1; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j != i + 1 && arr[j] == arr[j - 1]) continue;
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum == target) {
          let temp = [arr[i], arr[j], arr[k], arr[l]];
          resultArray.push(temp);
          k++;
          l--;
          while (k < l && arr[k] == arr[k - 1]) {
            k++;
          }
          while (k < l && arr[l] == arr[l + 1]) {
            l--;
          }
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }

  return resultArray;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// maximum points on a line

function maxPointsOnAline(arr) {
  let n = arr.length;

  let result = 0;
  for (let i = 0; i < n; i++) {
    //console.log(arr[i]);
    if (arr[i][0] === arr[i][1]) {
      result++;
    }
  }
  return result;
}

// minimum window substring

function minimumWindowSubstring(str1, str2) {
  let targetCount = {};
  let left = 0;
  let right = 0;
  let minWindow = "";
  let minSubstring = Infinity;
  let requiredCount = str2.length;
  for (let char of str2) {
    targetCount[char] = (targetCount[char] || 0) + 1;
  }
  //console.log(targetCount);

  while (right < str1.length) {
    if (targetCount[str1[right]] !== undefined) {
      targetCount[str1[right]]--;
      if (targetCount[str1[right]] === 0) {
        requiredCount--;
      }
    }
    while (requiredCount === 0) {
      if (right - left + 1 < minSubstring) {
        minSubstring = right - left + 1;
        minWindow = str1.slice(left, right + 1);
      }

      if (targetCount[str1[left]] !== undefined) {
        targetCount[str1[left]]++;
        if (targetCount[str1[left]] > 0) {
          requiredCount++;
        }
      }

      left++;
    }
    right++;
  }
  // console.log(targetCount);
  // console.log(requiredCount);
  return minWindow;
}

// console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"
// console.log(minimumWindowSubstring("aaabbbcdd", "abc")); // Output: "abbbc"
