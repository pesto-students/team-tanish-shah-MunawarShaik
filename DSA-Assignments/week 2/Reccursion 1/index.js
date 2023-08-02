// Array Sum using Recursion

function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.pop() + arraySum(arr);
  }
}

// First Index of Occurrence using Recursion

// normal method using while loop

function findIndex(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let index = 0;
  while (index <= arr.length) {
    if (arr[index] === target) {
      return index;
    } else {
      return -1;
    }
    index++;
  }
}

// First Index of Occurrence using Recursion

// using recursion

function searchRecursive(arr, target) {
  // base case
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === target) {
    return 0;
  }
  let index = searchRecursive(arr.slice(1), target);
  return index === -1 ? index : 1 + index;
}

// string reversal using recursion

function stringReverse(str) {
  let reversed = "";
  // console.log(str.slice(1));
  // reversed = str[0] + reversed;
  // console.log(reversed);
  // str = str.slice(1);
  // console.log(str[0] + reversed);
  if (!str || str.length === 1) {
    return str;
  } else {
    return str[0] + reversed + stringReverse(str.slice(1));
  }
}

// power Ser using recurssion

function powerSet(input) {
  let numbers = input.split(" ").map(Number);
  // console.log(numbers);

  let powerSetArray = [];

  function generateSubsets(index, currentSubset) {
    if (index === numbers.length) {
      powerSetArray.push(currentSubset.slice());
      return;
    }

    currentSubset.push(numbers[index]);
    generateSubsets(index + 1, currentSubset);

    currentSubset.pop();
    generateSubsets(index + 1, currentSubset);
  }
  generateSubsets(0, []);
  return powerSetArray;
}

// console.log(powerSet("1 2 3"));
// output
//  [
//   [ 1, 2, 3 ], [ 1, 2 ],
//   [ 1, 3 ],    [ 1 ],
//   [ 2, 3 ],    [ 2 ],
//   [ 3 ],       []
// ]

// print all permutations

function printAllPermutations(str) {
  let output = [];
  function generatepermutaions(curStr, remainingStr) {
    if (remainingStr.length === 0) {
      output.push(curStr);
      return;
    }

    for (let i = 0; i < remainingStr.length; i++) {
      const nextChar = remainingStr[i];
      const newCurrStr = curStr + nextChar;
      const newRemainingStr =
        remainingStr.slice(0, i) + remainingStr.slice(i + 1);
      generatepermutaions(newCurrStr, newRemainingStr);
    }
  }
  generatepermutaions("", str);
  return output;
}

// console.log(printAllPermutations("abc"));
// output = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
