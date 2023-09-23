class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

// Check Binary Search Tree
function isBST(node) {
  if (node.left == null && node.right == null) {
    return;
  } else if (node.left.value >= node.value || node.right.value < node.value) {
    flag = false;
    return;
  }
  isBST(node.left);
  isBST(node.right);
}
// TC is O(n)

// check if both bst are identical
function isBSTIdentical(node, node1) {
  if (node == null && node1 == null) {
    return;
  } else if (node == null || node1 == null) {
    flag == false;
    return;
  } else if (node.value != node1.value) {
    flag = false;
  }
  isBSTIdentical(node.left, node1.left);
  isBSTIdentical(node.right, node1.right);
}

// TC is O(n)

// Maximum Path Sum in Binary Tree
function maximumPathSum(root) {
  let maxSum = -Infinity;

  function helper(root) {
    if (!root) return 0;

    const leftSum = Math.max(helper(root.left), 0);
    const rightSum = Math.max(helper(root.right), 0);

    maxSum = Math.max(maxSum, root.value + leftSum + rightSum);

    return root.value + Math.max(leftSum, rightSum);
  }

  helper(root);
  return maxSum;
}

// let bst = new BST();
// bst.insert(1);
// bst.insert(2);
// bst.insert(3);
// bst.insert(-1);
// bst.insert(5);
// bst.insert(6);
// bst.insert(7);
// console.log(bst);
// console.log(maximumPathSum(bst.root));

function pathSum(root, maxSum) {
  if (root == null) {
    ans = Math.max(ans, maxSum);
    maxSum = 0;
    return;
  }
  maxSum += root.value;
  pathSum(root.left, maxSum);
  pathSum(root.right, maxSum);
}

// TC is O(n)

//kth smallest element in a binary search tree (BST)
function kthSmallest(root, k) {
  const result = [];

  function inOrder(node) {
    if (node !== null && result.length <= k) {
      inOrder(node.left);
      result.push(node.value);
      //console.log(node.value);
      inOrder(node.right);
    }
  }

  inOrder(root);
  console.log(result);
  return result[k - 1];
}
const bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(7);
console.log(bst);
console.log(kthSmallest(bst.root, 3)); // output 3
// TC is O(n)
