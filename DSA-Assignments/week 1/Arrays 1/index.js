// pairs of sum

const pairsOfSum = () => {
  let input = prompt();
  let array = input.split(",");
  const sum = parseInt(prompt());
  // console.log(array);
  // console.log(sum);
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (parseInt(array[i]) + parseInt(array[j]) === sum) {
        pairs.push([array[i], array[j]]);
      }
      //console.log(parseInt(array[i]) + parseInt(array[j]));
      //console.log("j", array[j]);
    }
  }
  console.log(pairs);
};

// insertion of two arrays

const insertionOfTwoArrays = () => {
  let input1 = prompt();
  let input2 = prompt();
  let array1 = input1.split(",");
  let array2 = input2.split(",");
  let insertionArray = [];
  let setArray = new Set(array1);
  for (let i = 0; i < array2.length; i++) {
    if (setArray.has(array2[i])) {
      insertionArray.push(array2[i]);
    }
  }
  insertionArray.sort((a, b) => a - b);
  console.log(insertionArray);
};

// sum of max and min values of Array

const sumOfMaxAndMinOfArray = () => {
  let input1 = prompt();
  let array = input1.split(",");
  console.log(array);
  let maxOfArr = parseInt(array[0]);
  let minOfArr = parseInt(array[0]);
  let n = array.length;
  for (let i = 1; i < n; i++) {
    if (maxOfArr < parseInt(array[i])) {
      maxOfArr = parseInt(array[i]);
    }
    if (minOfArr > parseInt(array[i])) {
      minOfArr = parseInt(array[i]);
    }
  }
  // console.log(maxOfArr);
  // console.log(minOfArr);
  let sum = maxOfArr + minOfArr;
  console.log(sum);
};

// non duplicate element in the array

const nonDuplicateElementofArray = () => {
  let input1 = prompt();
  let array = input1.split(",");
  //console.log(array);
  let arrayObject = new Map();
  for (let element of array) {
    if (arrayObject.has(element)) {
      arrayObject.set(element, arrayObject.get(element) + 1);
    } else {
      arrayObject.set(element, 1);
    }
  }
  // console.log(arrayObject);
  for (let [key, value] of arrayObject) {
    if (value == 1) {
      console.log(key);
    }
  }
};

// count elements of array

const countElements = () => {
  let input1 = prompt();
  let array = input1.split(",");
  console.log(array.length);
};
