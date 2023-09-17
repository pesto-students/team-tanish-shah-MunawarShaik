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

// reverse a queue
function reverseQueue(que) {
  if (que.isEmpty()) {
    return;
  }
  let ele = que.front();
  que.dequeue();
  reverseQueue(que);
  que.enqueue(ele);
  return que;
}
// let q1 = new Queue();
// let elements = [1, 2, 3, 4, 5, 6, 7];
// elements.forEach((item) => q1.enqueue(item));
// console.log(reverseQueue(q1)); // output [7, 6, 5, 4, 3, 2, 1]

// reverse k elements in a queue

function reverseKelementsInQueue(que, k) {
  let st = new Stack();
  let ans = new Queue();

  while (k > 0) {
    st.push(que.front());
    que.dequeue();
    k--;
  }

  while (!st.isEmpty()) {
    ans.enqueue(st.top());
    st.pop();
  }
  while (!que.isEmpty()) {
    ans.enqueue(que.front());
    que.dequeue();
  }
  return ans;
}
// let q1 = new Queue();
// let elements = [1, 2, 3, 4, 5, 6, 7];
// elements.forEach((item) => q1.enqueue(item));
//console.log(q1);
// console.log(reverseKelementsInQueue(q1, 3)); // //output[(3, 2, 1, 4, 5, 6, 7)];

// queue reconstruction by height

function queueReconstruction(arr) {
  // sorting the array
  arr.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  //  console.log(arr);
  const que = [];
  for (let person of arr) {
    // splice method to add elements based on the heights
    // person[1] represents the number of persons behind that is index
    // person is the item that is inserted on the index
    que.splice(person[1], 0, person);
  }
  return que;
}
// const people = [
//   [7, 0],
//   [4, 4],
//   [7, 1],
//   [5, 0],
//   [6, 1],
//   [5, 2],
// ];
// console.log(queueReconstruction(people)); // output [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

//queue rearrangement

function queueReArrangement(que) {
  let even = new Queue();
  let odd = new Queue();

  while (!que.isEmpty()) {
    const num = que.dequeue();
    if (num % 2 === 0) {
      even.enqueue(num);
    } else {
      odd.enqueue(num);
    }
  }

  while (!even.isEmpty()) {
    que.enqueue(even.dequeue());
  }
  while (!odd.isEmpty()) {
    que.enqueue(odd.dequeue());
  }
  return que;
}
// let q1 = new Queue();
// let elements = [1, 2, 3, 4, 5, 6, 7];
// elements.forEach((item) => q1.enqueue(item));
// console.log(queueReArrangement(q1)); // output [2, 4, 6, 1, 3, 5, 7]

// circular tour of petrol pumps

function findStartingPump(petrol, distance) {
  let n = petrol.length;
  let start = 0;
  let remainingPetrol = 0;

  for (let i = 0; i < n; i++) {
    remainingPetrol += petrol[i] - distance[i];
    if (remainingPetrol < 0) {
      start = i + 1;
      remainingPetrol = 0;
    }
  }
  if (remainingPetrol >= 0) {
    return start;
  } else {
    return -1;
  }
}
// const petrol = [4, 6, 7, 4];
// const distance = [6, 5, 3, 5];
// console.log(findStartingPump(petrol, distance)); // output = 1
