var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function(){
	return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
	var keyIn;
	if ( this.size() === 0 ) {
		keyIn = 1;
	}
	else {
		keyIn = Math.max.apply(null, Object.keys(this.storage)) + 1;
	}
	this.storage[keyIn] = value;
};

queueMethods.dequeue = function() {
  var keyOut = Math.min.apply(null, Object.keys(this.storage) );
  var dequeueItem = this.storage[keyOut];
  delete this.storage[keyOut];
  return dequeueItem; 
};




