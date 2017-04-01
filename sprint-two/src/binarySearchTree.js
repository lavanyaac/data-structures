var BinarySearchTree = function(value) {
	var binaryInstance = Object.create(funcMethods);
	binaryInstance.left = null;
	binaryInstance.right = null;
	binaryInstance.value = value;

	return binaryInstance;
};

var funcMethods = {};

funcMethods.insert = function(value) {

	var tree = BinarySearchTree(value);
	var currentNode = this;

	while(currentNode) {
		if(value > currentNode.value) {
			if ( currentNode.right === null){
				currentNode.right = tree;
				break;
			}			
			currentNode = currentNode.right;
		}
		else if ( value < currentNode) {
			if (currentNode.left === null) {
				currentNode.left = tree;
				break;
			}
			currentNode = currentNode.left;
		}
	}
};

funcMethods.depthFirstLog = function(cb){
	var currentNode = this;
	while( currentNode !== null){ 
		cb(currentNode.value) ;
		if ( currentNode.left !== null ) {
			currentNode = currentNode.left;
		}
		else if ( currentNode.right !== null) {
			currentNode = currentNode.right;
		}else{
			break;
		}
	}
	
}

funcMethods.contains = function(value) {
	var currentNode = this;

	while( currentNode ) {
		if (value === currentNode.value) {
			return true;
		}
		if (value > currentNode.value) {
			currentNode = currentNode.right;
		}
		else {
			currentNode = currentNode.left;
		}
	}
	return false;

};

/*
 * Complexity: What is the time complexity of the above functions?
 .insert = O(log(n))
 .depthFirstLog = O(n)
 .contains = O(log(n))
 */































