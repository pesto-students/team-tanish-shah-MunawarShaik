// module.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

// app.js
import { PI, add } from "./module.js";

console.log(PI); // output: 3.14159
console.log(add(2, 3)); // output: 5
