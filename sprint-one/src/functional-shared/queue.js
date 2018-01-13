var Queue = function() {
  var someInstance = {
    storage: {},
     back: 0,
     front: 0,
  };

 _.extend(someInstance, queueMethods);

 return someInstance;
 };

 var queueMethods = {

    enqueue : function(value) {

        this.storage[this.back] = value;
        this.back ++;
    },

    dequeue : function() {

        if (this.front < this.back) {
            var value = this.storage[this.front];
            delete this.storage[this.front];
            this.front++;
            return value;
        }
    },

    size : function() {

        return this.back - this.front ;
    }
 };
