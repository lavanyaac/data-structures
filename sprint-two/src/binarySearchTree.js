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
		console.log(currentNode, value)
		if(value > currentNode.value) {
			if ( currentNode.right === null){
				currentNode.right = tree;
				break;
			}			
			currentNode = currentNode.right;
		}
		else {
			if (currentNode.left === null) {
				currentNode.left = tree;
				break;
			}
			currentNode = currentNode.left;
		}
		// if (currentNode === null) {
		// 	currentNode = tree;
		// 	break;
		// }
		console.log(currentNode)
	}


	/*
	if ( compare( tree.value, this.value ) )

    var compare = function(a,b) {
    	if ( a.value < b.value ) { a.right = b; }
    	else if ( a.value > b.value ) { a.left = b;}
    	else { console.log('a === b'); }
    };
	*/

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
 */































