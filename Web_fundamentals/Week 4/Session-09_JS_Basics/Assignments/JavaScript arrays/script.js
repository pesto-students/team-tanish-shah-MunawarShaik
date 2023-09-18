// Put your solution here
const divideArray = (nums) => {
  // console.log(nums);
  let evenNums = [];
  let oddNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      evenNums.push(nums[i]);
    } else {
      oddNums.push(nums[i]);
    }
  }
  if (evenNums.length == 0) {
    console.log(`Even numbers : None`);
  } else {
    console.log(`Even Numbers : ${evenNums.sort()}`);
  }
  if (oddNums.length == 0) {
    console.log(`Odd numbers : None`);
  } else {
    console.log(`Odd Numbers : ${oddNums.sort()}`);
  }
};

let numsArr = [2, 4, 6, 8];

divideArray(numsArr);
