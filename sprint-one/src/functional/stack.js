var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var total = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[total] = value;
    total++;
  };

  someInstance.pop = function() {
    total--;
    var value = storage[total];
    delete storage[total];
    return value
  };

  someInstance.size = function() {
    if (total > 0) {
      return total;
    } else {
      return 0;
    }
  };
  
  return someInstance;
};
