class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    return this.items.join(" ");
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  top() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// valid paranthesis
function validParantheses(s) {
  let st = new Stack();
  let n = s.length;
  let str = s.split("");
  console.log(str);
  for (let i = 0; i < n; i++) {
    // console.log(str[i]);
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      st.push(str[i]);
    } else {
      if (st.isEmpty()) {
        return false;
      } else {
        let char = st.top();
        console.log(char);
        st.pop();
        if (
          (str[i] === ")" && char === "(") ||
          (str[i] === "}" && char === "{") ||
          (str[i] === "]" && char === "[")
        ) {
        } else {
          return false;
        }
      }
    }
  }
  if (st.isEmpty()) {
    return true;
  } else {
    return false;
  }
}
//console.log(validParantheses("({[]})")); // output true

// simplify path
function simplifyPath(str) {
  if (str.length === 0) {
    return "/";
  }
  let st = [];
  let array = str.split("/").filter((item) => item != "" && item != ".");
  console.log(array);
  for (let item of array) {
    if (item == "..") st.pop();
    else st.push(item);
  }
  return "/" + st.join("/");
}
//console.log(simplifyPath("/home/.././user//foo/../../bar")); // output /bar

// next greater element
function nextGreaterElement(arr) {
  let n = arr.length;
  let ans = [];
  let st = new Stack();
  for (let i = n - 1; i >= 0; i--) {
    if (!st.isEmpty()) {
      while (st.top() <= arr[i] && !st.isEmpty()) {
        st.pop();
      }
    }

    if (st.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = st.top();
    }
    st.push(arr[i]);
  }
  return ans;
}
//console.log(nextGreaterElement([5, 3, 8, 4, 2, 7, 1])); // output [8, 8, -1, 7, 7, -1, -1]

// evaluate reverse notation
function evaluateReverseNotation(str) {
  let st = new Stack();
  let arr = str.split("");

  for (let chr of arr) {
    if (chr === "+" || chr === "-" || chr === "*" || chr === "/") {
      let operand2 = st.top();
      st.pop();
      let operand1 = st.top();
      st.pop();
      if (chr === "+") {
        st.push(operand1 + operand2);
      }
      if (chr === "+") {
        st.push(operand1 + operand2);
      }
      if (chr === "-") {
        st.push(operand1 - operand2);
      }
      if (chr === "*") {
        st.push(operand1 * operand2);
      }
      if (chr === "/") {
        st.push(operand1 / operand2);
      }
    } else {
      st.push(parseInt(chr));
    }
  }
  return st.top();
}
//console.log(evaluateReverseNotation("234*+")); //output 14
