var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.oldestIndex = 1;
  someInstance.newestIndex = 1;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.newestIndex] = value;
    this.newestIndex++;
  },

  dequeue: function() {
    var stored = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++;
    return stored;
  },

  size: function() {
    return this.newestIndex - this.oldestIndex > 0 ? this.newestIndex - this.oldestIndex : 0;
  }
};
