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
}
// finding middle node
function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// reversing the linkedList
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}

// let l1 = new LinkedList();
// l1.append(1);
// l1.append(2);
// l1.append(3);
// l1.append(2);
// l1.append(1);
// l1.append(1);
// console.log(findMiddleNode(l1.head));
//console.log(reverseLinkedList(l1.head));

// check is linkedList palindrome ?
function isLinkedListPalindrome(head) {
  let middleNode = findMiddleNode(head);
  let reversedHalf = reverseLinkedList(middleNode);

  let fisrtHalf = head;
  let secondHalf = reversedHalf;
  while (secondHalf !== null) {
    if (fisrtHalf.value !== secondHalf.value) {
      return false;
    }
    fisrtHalf = fisrtHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
}
// console.log(isLinkedListPalindrome(l1.head)); // output  true

// merge two sorted linked lists

function mergeLinkedList(list1, list2) {
  let tempNode = new LinkedList(-1);
  let current = tempNode;

  while (list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return tempNode.next;
}

// let l1 = new LinkedList();
// l1.append(1);
// l1.append(2);
// l1.append(3);

// let l2 = new LinkedList();
// l2.append(4);
// l2.append(5);
// l2.append(6);
// l2.append(7);

// console.log(l1);
// console.log(l2);
// console.log(mergeLinkedList(l1.head, l2.head)); // output 1->2->3->4->5->6->7

// quickSort On a linkedList

// function quickSortLinkedList(list) {
//   let count = 0;
//   // let tempNode = new LinkedList(-1);
//   // let current = tempNode;

//   while (list !== null) {
//     count++;
//   }
// }

// remove duplicates in a linked list
function removeDuplicates(list) {
  let map = new Map();
  let current = list;
  map.set(current.value);
  let prev = current;
  current = current.next;
  //   console.log("before");
  //   console.log(map);
  //   console.log(list);
  while (current !== null) {
    if (map.has(current.value)) {
      prev.next = current.next;
    } else {
      map.set(current.value, 1);
      prev = current;
    }
    current = prev.next;
  }
  return list;
}
// let l1 = new LinkedList();
// l1.append(1);
// l1.append(3);
// l1.append(5);
// l1.append(6);
// l1.append(3);
// l1.append(2);
// l1.append(1);
// console.log(removeDuplicates(l1.head));

// reverse every k nodes

function reverseEveryKNodes(list, k) {
  let prev = null;
  let current = list;
  let nextPtr;

  let count = 0;
  while (current !== null && count < k) {
    nextPtr = current.next;
    current.next = prev;
    prev = current;
    current = nextPtr;
    count++;
  }

  if (nextPtr !== null) {
    list.next = reverseEveryKNodes(nextPtr, k);
  }
  return prev;
}

let l1 = new LinkedList();
l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4);
l1.append(5);
l1.append(6);
l1.append(7);
l1.append(8);
// console.log(reverseEveryKNodes(l1.head, 3));

// let current = reverseEveryKNodes(l1.head, 3);
// let output = [];
// while (current !== null) {
//   console.log(current.value);
//   output.push(current.value);
//   current = current.next;
// }
// console.log(output);

//
