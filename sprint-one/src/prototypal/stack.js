var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	var key = this.size() + 1;
	this.storage[key] = value;
};

stackMethods.pop = function() {
  var popItem ;
  if ( this.size() > 0) {
  	popItem = this.storage[this.size()];
  	delete this.storage[this.size()];
  }
  return popItem;
};

stackMethods.size = function() {
	return Object.keys(this.storage).length;
};
