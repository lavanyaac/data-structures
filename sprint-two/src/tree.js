var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree(value)
	this.children.push(child);
};

treeMethods.contains = function(target) {
	return findValue(this);
	function findValue(treeObj){
		if(treeObj.value === target){
			return true;
		}
		if(treeObj.children.length > 0 ){
			for(var child of treeObj.children){
				if(findValue(child)){
					return true;
				}
			}
			return false;
		}
		else{
			return false;
		}
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1)
 contains = O(n)
 */
