// longest subarray with equal number of vowels and consonants

function countVowelsAndConsonants(str) {
  console.log(str);
  let maxLen = 0;
  let vowelCount = 0;
  let consonantCount = 0;
  let vowels = "aeiouAEIOU";
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    } else {
      consonantCount++;
    }

    let difference = vowelCount - consonantCount;
    if (map.has(difference)) {
      maxLen = Math.max(maxLen, i - map.get(difference));
    } else {
      map.set(difference, i);
    }
  }

  console.log(maxLen);
}
// countVowelsAndConsonants("aijkmlcsoeUIOAE");

// longest subarray with equal number of 0 and 1;

function longestSubarrayWithZerosAndOnes(nums) {
  let ans = 0;
  let map = new Map(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      sum += -1;
    } else if (nums[i] == 1) {
      sum += +1;
    }

    if (map.has(sum)) {
      let index = map.get(sum);
      let len = i - index;
      if (len > ans) {
        ans = len;
      }
    } else {
      map.set(sum, i);
    }
  }

  return ans;
}

// Longest Consecutive Subsequence

function longestConsecutiveSubsequence(arr) {
  let map = new Map();
  // set true for every value
  for (let val of arr) {
    map.set(val, true);
  }

  // set false if the previous value contains in the map
  for (let val of arr) {
    if (map.has(val - 1)) {
      map.set(val, false);
    }
  }

  let maxLen = 0;
  let maxStartPoint = 0;
  for (let val of arr) {
    if (map.get(val) == true) {
      let tempLen = 1;
      let tempStartPoint = val;
      while (map.has(tempStartPoint + tempLen)) {
        tempLen++;
      }
      if (tempLen > maxLen) {
        maxStartPoint = tempStartPoint;
        maxLen = tempLen;
      }
    }
  }
  console.log(maxLen);
}

// longestConsecutiveSubsequence([205, 100, 4, 200, 201, 202, 1, 3, 203, 204]); // output 6

// longest palindromic subsequence

function longestPalindromicSubsequence(s) {
  let text1 = s;
  let text2 = s.split("").reverse().join("");
  let temp = [];
  for (let i = 0; i <= text1.length; i++) {
    temp.push(new Array(text2.length + 1).fill(0));
  }

  for (let i = 1; i < temp.length; i++) {
    for (let j = 1; j < temp[0].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        temp[i][j] = temp[i - 1][j - 1] + 1;
      } else {
        temp[i][j] = Math.max(temp[i - 1][j], temp[i][j - 1]);
      }
    }
  }
  return temp[text1.length][text2.length];
}
