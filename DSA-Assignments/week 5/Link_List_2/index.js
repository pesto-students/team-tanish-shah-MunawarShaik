class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// delete without head
function deleteWithoutHead(node) {
  if (node.next === null) {
    return;
  }
  let cur = node.next;
  node.value = cur.value;
  node.next = cur.next;
}

// let l1 = new LinkedList();
// l1.append(10);
// l1.append(20);
// l1.append(30);
// l1.append(40);
// l1.append(50);
// console.log(deleteWithoutHead(l1));

// find intersection point of y linkedlist
function findIntersection(list1, list2) {
  if (list1 === null || list2 === null) {
    return null;
  }
  // console.log(list1);
  // console.log(list2);
  let a = list1;
  let b = list2;
  // if a and b have diff len, then we will stop loop after second iteration
  while (a != b) {
    // for the end of first iteration, we just reset the pointer to the head of the another linkedList
    a = a === null ? list2 : a.next;
    b = b === null ? list1 : b.next;
  }
  // console.log(a);
  return a;
}

function sortLinkedList(list) {
  if (list === null || list.next === null) {
    return list;
  }
  let head = list;
  let count_0 = 0,
    count_1 = 0,
    count_2 = 0;
  while (list !== null) {
    if (list.value === 0) {
      count_0++;
    } else if (list.value === 1) {
      count_1++;
    } else {
      count_2++;
    }
    list = list.next;
  }
  list = head;
  while (count_0 > 0) {
    list.value = 0;
    list = list.next;
    count_0--;
  }
  while (count_1 > 0) {
    list.value = 1;
    list = list.next;
    count_1--;
  }
  while (count_2 > 0) {
    list.value = 2;
    list = list.next;
    count_2--;
  }
  return head;
}
// let l1 = new LinkedList();
// l1.append(1);
// l1.append(2);
// l1.append(0);
// l1.append(0);
// l1.append(2);
// console.log(sortLinkedList(l1.head));

//Subtract Two Numbers represented as Linked Lists
function subtractTwoNumbers(list1, list2) {
  let arr1 = [];
  let arr2 = [];
  let l1 = list1.head;
  let l2 = list2.head;

  while (l1) {
    arr1.push(l1.value);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2.value);
    l2 = l2.next;
  }
  // console.log(arr1, arr2);
  let ans =
    arr1.length > arr2.length
      ? parseInt(arr1.reverse().join("")) - parseInt(arr2.reverse().join(""))
      : parseInt(arr2.reverse().join("")) - parseInt(arr1.reverse().join(""));
  console.log(ans);
  let finalAns = new LinkedList();
  let a = String(ans).split("");

  //console.log(a);
  a.map((item) => {
    finalAns.append(parseInt(item));
  });
  return finalAns;
}
// let l1 = new LinkedList();
// let l2 = new LinkedList();
// l1.append(3);
// l1.append(2);
// l1.append(1);
// l2.append(1);
// l2.append(2);
// console.log(subtractTwoNumbers(l1, l2)); // output [1,0,2]

// zigzag fashion

function zigzagFashion(list) {
  if (!list.head || !list.head.next) {
    return;
  }

  let current = list.head;
  let isGreater = true;

  while (current.next) {
    if (
      (isGreater && current.value > current.next.value) ||
      (!isGreater && current.value < current.next.value)
    ) {
      // swapping
      const temp = current.value;
      current.value = current.next.value;
      current.next.value = temp;
    }
    current = current.next;
    isGreater = !isGreater;
  }
  return list;
}

const l1 = new LinkedList();
const elements = [4, 3, 7, 8, 6, 2, 1];
elements.forEach((element) => l1.append(element));
//console.log(zigzagFashion(l1)); // output [3,7,4,8,2,6,1]
