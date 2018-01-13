var Queue = function(){
  var someInstance = {};
  var storage = {};
  var counter = 0;
  var nextUp = 0;

  someInstance.enqueue = function(value){
      storage[counter] = value;
      counter++;
  };

  someInstance.dequeue = function(){
    //same as return queue.shift();
    var val = storage[nextUp];
    delete storage[nextUp];
    nextUp++;
    return val;
  };

  someInstance.size = function(){
    if(counter - nextUp > 0) {
      return counter - nextUp;
    } else {
      return 0;
    }
  };
  return someInstance;
};
