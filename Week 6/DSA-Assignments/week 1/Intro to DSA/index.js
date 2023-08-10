// is leap year ?
const isLeapYear = () => {
  let year = prompt("please enter the year");
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

// is Palindrome ?
// using inbuild methods

const isPalindrome = () => {
  let number = parseInt(prompt("please enter a number"));
  console.log(typeof number);
  let reversedNumber = Number(String(number).split("").reverse().join(""));
  console.log(typeof reversedNumber);
  if (number === reversedNumber) {
    console.log("yes");
  } else {
    console.log("No");
  }
};

// is Palindrome ?
// using loop.

const isPalindrome2 = () => {
  let originalNumber = parseInt(prompt("please enter a number"));
  let reversedNumber = 0;
  let number = originalNumber;
  while (number > 0) {
    let last = number % 10;
    reversedNumber = reversedNumber * 10 + last;
    number = parseInt(number / 10);
  }
  if (originalNumber === reversedNumber) {
    console.log("yes");
  } else {
    console.log("No");
  }
};

// Odd Even

const oddEven = () => {
  let number = parseInt(prompt("please enter a number"));
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

// Reverse a number

const reverseANumber = () => {
  let originalNumber = parseInt(prompt("please enter a number"));
  let reversedNumber = 0;
  let number = originalNumber;
  while (number > 0) {
    let last = number % 10;
    reversedNumber = reversedNumber * 10 + last;
    number = parseInt(number / 10);
  }
  console.log(reversedNumber);
};

// product of lcm and hcf

const productOfLcmAndHcf = () => {
  let num1 = parseInt(prompt("please enter first number"));
  let num2 = parseInt(prompt("please enter second number"));
  let min = num1 < num2 ? num1 : num2;
  let max = num1 > num2 ? num1 : num2;

  let hcf;
  for (let i = 1; i <= min; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
  }

  // findind lcm method 1

  //let lcm = max;
  // while (true) {
  //   if (lcm % num1 == 0 && lcm % num2 == 0) {
  //     break;
  //   }
  //   lcm++;
  // }

  // findind lcm method 2
  let lcm = (num1 * num2) / hcf;
  console.log(`HCF is of ${num1} and ${num2} is ${hcf}`);
  console.log(`LCM is of ${num1} and ${num2} is ${lcm}`);
  let product = hcf * lcm;
  console.log(`Product of HCF and LCM of ${num1} and ${num2} is ${product}`);
};
