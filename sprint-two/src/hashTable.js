var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  var bucket;
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    bucket = [];
    bucket.push([key, value]);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
      } else if (bucket[i][0] != key && i === bucket.length - 1) {
        bucket.push([key, value]);
      }
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  var tuple;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      tuple = i;
    }
  }

  return bucket[tuple] === undefined ? undefined : bucket[tuple][1];
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  var tuple;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      tuple = i;
    }
  }

  bucket.splice(tuple, 1);
  this._storage.set(index, bucket);
};

/*
 * Complexity: What is the time complexity of the above functions?
  As currently written:
    insert: O(n)
    retrieve: O(n)
    remove: O(n)
  If we add the ability to resize, all will be O(1).
 */
