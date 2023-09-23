// delete elements of array which are divisible by 2 and 3
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deleteElements = (array) => {
  let newArr = array.filter((elem) => elem % 2 !== 0 && elem % 3 !== 0);
  console.log(newArr);
};

// old key new key
const replaceOldKey = (array, oldKey, newKey) => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    if (array[i] == oldKey) {
      array[i] = newKey;
    }
  }
  console.log(array);
};

// max product of a subArray;

function maxProductOfSubArray(arr) {
  let maxProduct = 1;
  let currentProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    currentProduct = 1;
    for (let j = i; j < arr.length; j++) {
      currentProduct *= arr[j];
      if (currentProduct < 1) {
        currentProduct = 1;
      } else if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
      }
    }
  }

  return maxProduct;
}

// console.log(maxProductOfSubArray([5, 2, 3, -2, 4, 5])); //30
// console.log(maxProductOfSubArray([4, -1, -2, -3, -4])); //4

// sum of two matrixs

function takeInputArray() {
  let rows = parseInt(prompt("Enter number of rows"));
  let cols = parseInt(prompt("Enter number of cols"));
  let array = new Array(rows);

  for (let i = 0; i < rows; i++) {
    array[i] = new Array(cols);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      array[i][j] = prompt();
    }
  }
  return array;
}

function sumOfTwoMatrix() {
  let array1 = takeInputArray();
  let array2 = takeInputArray();
  // console.log(array1);
  // console.log(array2);
  let sumArray = [];
  if (
    array1.length !== array2.length ||
    array1[0].length !== array2[0].length
  ) {
    console.log("Arrays must have the same dimensions");
  } else {
    for (let i = 0; i < array1.length; i++) {
      let sum = [];
      for (let j = 0; j < array1[i].length; j++) {
        sum.push(parseInt(array1[i][j]) + parseInt(array2[i][j]));
      }
      sumArray.push(sum);
    }
  }
  if (sumArray.length > 0) {
    console.log(sumArray);
  }
}

// transpose a matrix

function transposeAMatrix(arr, row, col) {
  let arrT = [];
  let k = 0;
  for (let i = 0; i < col; i++) {
    arrT[i] = new Array(row);
  }

  for (i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arrT[j][i] = arr[k];
      k++;
    }
  }

  return arrT;
}
// console.log(transposeAMatrix([1, 2, 3, 4], 2, 2)); //[ [ 1, 3 ], [ 2, 4 ] ]
// console.log(transposeAMatrix([1, 2, 3, 4, 5, 6, 7, 8], 2, 4)); //[ [ 1, 5 ], [ 2, 6 ], [ 3, 7 ], [ 4, 8 ] ]
