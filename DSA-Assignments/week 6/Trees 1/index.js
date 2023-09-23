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

function checkHeight(root) {
  if (root == null) {
    return 0;
  }
  let l = checkHeight(root.left);
  let r = checkHeight(root.right);

  return Math.max(l, r) + 1;
}

// TC is O(n)

function invert(root) {
  if (root != null) {
    console.log(root.value);
    if (root.left != null && root.right != null) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
    }
    invert(root.left);
    invert(root.right);
  }
}

// TC is O(n)

function leafNode(root) {
  let count = 0;
  traverseal(root);

  function traverseal(node) {
    if (node != null) {
      if (node.left == null && node.right == null) {
        count++;
      }
      traverseal(node.left);
      traverseal(node.right);
    }
  }
  console.log(count);
}

// TC is O(n)

function serial(root) {
  let str = "->";
  serialize(root);
  function serialize(root) {
    if (root != null) {
      str += root.value.toString() + ",";
      serialize(root.left);
      serialize(root.right);
    }
  }
  console.log(str);
}

// TC is O(n)
