var BinarySearchTree = function(value) {
  var binaryTree = Object.create(BinarySearchTree.prototype);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;

  return binaryTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var childTree = BinarySearchTree(value);

  var test = function(child, node) {
    if (child.value < node.value) {
      if (node.left === null) {
        node.left = child;
      } else {
        return test(child, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = child;
      } else {
        return test(child, node.right);
      }
    };
  };

  test(childTree, this);
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(target);
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(target);
    }
  };
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  };

  if (this.right) {
    this.right.depthFirstLog(cb);
  };
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
