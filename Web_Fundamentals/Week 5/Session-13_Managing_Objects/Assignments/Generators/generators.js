// creating a generator function
function* generateSymbol(array) {
  for (let i of array) {
    yield Symbol(i);
  }
}

// creating a array
let arr = ["hello", "world", "javascript"];

// creating a generator
const generator = generateSymbol(arr);

// creating empty symbol array
let symbolArray = [];
for (const element of generator) {
  // adding symbols to symbol array
  symbolArray.push(element);
}
console.log(symbolArray);
