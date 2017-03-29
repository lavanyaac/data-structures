var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.size = function(){
	return Object.keys(this.storage).length;
}

Stack.prototype.push = function(value){
	var key = this.size() + 1;
	this.storage[key] = value;
}

Stack.prototype.pop = function(){
	var popItem ;
	if(this.size() > 0){
		popItem = this.storage[this.size()];
		delete this.storage[this.size()];
	}
	return popItem;
}