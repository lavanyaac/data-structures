var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var key = someInstance.size() + 1;
    storage[key] = value;
  };

  someInstance.pop = function() {
    var popItem;
    if (someInstance.size() > 0 ) {
      popItem = storage[someInstance.size()];
      delete storage[someInstance.size()];
    }
    return popItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
// storage = {
//   1: "hello",
//   2: "bye"
// }