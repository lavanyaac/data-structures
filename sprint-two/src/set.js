var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	if (this._storage.includes(item) === false){
		this._storage.push(item);
	}
};

setPrototype.contains = function(item) {
	return this._storage.includes(item);
};

setPrototype.remove = function(item) {
	var idx = this._storage.indexOf(item);
	if(idx >= 0 ){
		this._storage =  this._storage.slice(0, idx-1).concat(this._storage.slice(idx+1))
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 add = O(n)
 contains = O(n)
 remove = O(n)
 */