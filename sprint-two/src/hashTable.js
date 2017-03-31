

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if ( !Array.isArray(this._storage.get(index)) ){
  	this._storage.set(index, []);
  }
  var keyFound = false;
  for (var tuple of this._storage.get(index) ) {
  	if (tuple[0] === k) {
  		tuple[1] = v;
  		keyFound = true;
  	}
  }
  if(keyFound === false){
	  var tuple = [k, v];
	  this._storage.get(index).push(tuple);
  }


//   console.log(k,v,index )
//   console.log(this._storage.get(index))
//   debugger
//   if ( this._storage.get(index) ) {// collision!! 
//   	var bucket  = LimitedArray(2);
  	
//   	var i1 = getIndexBelowMaxForKey(this._storage.get(index), 2)
//   	var i2 = getIndexBelowMaxForKey(k, 2)
//   	bucket.set(i1, this._storage.get(index) );
//   	bucket.set(i2, v);
//   	this._storage.remove(k);
//   	this._storage.set(index, bucket);
    
//   	console.log(this._storage)
//   }
//   else {
//   this._storage.set(index, v);
// }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( !Array.isArray(this._storage.get(index)) ) {
  	return;
  }
  for (var tuple of this._storage.get(index) ) {
  	if (tuple[0] === k) {
  		return tuple[1];
  	}
  }
  return;

  // return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each( function (hashValue, idx, storage) {
  	// a = storage[i], b = i, c = storage
  	if ( index === idx ) {
  		storage[index]= undefined;
  	}
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


