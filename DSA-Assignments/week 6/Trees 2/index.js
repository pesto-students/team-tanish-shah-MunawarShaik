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

function isAncestor(node, n1, n2) {
  if (node == null) {
    return null;
  }

  if (node.value == n1 || node.value == n2) {
    return node.value;
  }

  let left_lca = isAncestor(node.left, n1, n2);
  let right_lca = isAncestor(node.right, n1, n2);

  if (left_lca != null && right_lca != null) {
    return node.value;
  }

  return left_lca != null ? left_lca : right_lca;
}

// TC is O(n)

function LOT(root) {
  if (root == null) {
    return;
  }

  let queue = new Queue();
  queue.enque(root);
  while (!queue.isEmpty()) {
    let node = queue.deque();
    console.log(node.value);
    if (node.left != null) {
      queue.enque(node.left);
    }
    if (node.right != null) {
      queue.enque(node.right);
    }
  }
}

function preOrder(node, current) {
  if (node == null) {
    if (current == requireNum) {
      flag = true;
    } else if (current != 22) {
      current = 0;
    }
    return;
  } else if (node != null) {
    current += node.value;
    preOrder(node.left, current);
    preOrder(node.right, current);
  }
}

// TC is O(n)

function isSubtree(root, root1) {
  if (root != null) {
    if (root.value == root1.value) {
      if (
        root.left.value == root1.left.value &&
        root.right.value == root1.right.value
      ) {
        console.log("yes");
      }
    }
    isSubtree(root.left, root1);
    isSubtree(root.right, root1);
  }
}

// TC is O(n)

function isSymmetric(root) {
  console.log(check(root, root));
  function check(root1, root2) {
    if ((root1 == null) & (root2 == null)) {
      return true;
    }
    if (root1 == null || root2 == null) {
      return false;
    }

    return (
      root1.value == root2.value &&
      check(root1.left, root2.right) &&
      check(root1.right, root2.left)
    );
  }
}

// TC is O(n)
