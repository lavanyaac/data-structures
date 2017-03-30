var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.size() === 0) {
      var keyIn = 1;
    }
    else {
      var keyIn = Math.max.apply(null, Object.keys(storage) ) + 1;
    }
    storage[keyIn] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      var keyOut = Math.min.apply(null, Object.keys(storage) );
      var dequeueItem = storage[keyOut];
      delete  storage[keyOut];
    }
    return dequeueItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
