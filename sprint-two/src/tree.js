var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  Object.assign(newTree,treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};
https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};
