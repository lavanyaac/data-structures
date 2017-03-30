var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, queueMethods);

  return someInstance;
}

var extend = function(obj1, obj2){
	return Object.assign(obj1, obj2);
}

var queueMethods = {};

queueMethods.size = function(){
	return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(value){
	if (this.size() === 0) {
      var keyIn = 1;
    }
    else {
	var keyIn = Math.max.apply(null, Object.keys(this.storage)) + 1;
    }

	this.storage[keyIn] = value;
	console.log(this.storage);

}

queueMethods.dequeue = function(){
	var keyOut = Math.min.apply(null, Object.keys(this.storage));
	var dequeueItem = this.storage[keyOut];
	delete this.storage[keyOut];
	return dequeueItem;
}


