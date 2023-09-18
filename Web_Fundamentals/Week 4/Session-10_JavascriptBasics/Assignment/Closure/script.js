// creating function Counter
function counter() {
  let count = 0;
  function incriment() {
    count += 1;
    return count;
  }
  return incriment;
}

// creating instances
let firstCounter = counter();
let secondCounter = counter();

// creating arrays for storing values
let firstValues = [];
let secondValues = [];

for (let i = 0; i < 5; i++) {
  // adding values in array
  firstValues.push(firstCounter());
}

for (let i = 0; i < 3; i++) {
  // adding values in array
  secondValues.push(secondCounter());
}

console.log(firstValues);
console.log(secondValues);
