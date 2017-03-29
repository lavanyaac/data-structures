var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  
  return someInstance;
};

var extend = function(obj1, obj2){
	return Object.assign(obj1, obj2)
}


var stackMethods = {};

stackMethods.size = function(){
	return Object.keys(this.storage).length;
}

stackMethods.push = function(value){
	var key = this.size() + 1;
    this.storage[key] = value;
}

stackMethods.pop = function() {
	var popItem;
	if(this.size() > 0){
		popItem = this.storage[this.size()];
		delete this.storage[this.size()];
	}
	return popItem;
}


