var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head == null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var oldNode = list.head;
    list.head = list.head.next;
    return oldNode.value;
  };

  list.contains = function(target) {
    var curNode = list.head;
    while(curNode != null) {
      if (curNode.value === target) {
        return true;
      } else {
        curNode = curNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
