var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var queue = [];

  // Implement the methods below
  var length =0;

  someInstance.enqueue = function(value){
      queue[length] = value;
      length++;
  };

  someInstance.dequeue = function(){
    //same as return queue.shift();
    var v = queue[0];
    shift();
    length--;
    return v;
  };

  someInstance.size = function(){
    return length;
  };

  someInstance.print = function() {
      var str = "[";
      for (var i = 0; i < length; i++) {
          str += queue[i]
          if (i != length - 1) {
            str += " ,";
          }
      }
      str += "]";
      console.log(str);
  };

  return someInstance;

  function shift() {
      for (var i = 0; i < queue.length - 1; i++) {
          queue[i] = queue[i+1];
      }
      //queue.pop();

  }
};
