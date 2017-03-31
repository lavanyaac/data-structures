

// Instantiate a new graph
var Graph = function() {
	this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // graph.hasOwnProperty(node)
	this.graph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return Boolean(this.graph[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var edges = this.graph[node];
	for(var edge of edges){
		this.removeEdge(node, edge);
	}
	delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return (this.graph[fromNode].includes(toNode) && this.graph[toNode].includes(fromNode))
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	//be sure to push edge to both nodes
	this.graph[fromNode].push(toNode);
	this.graph[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	//be sure to remve edges for both node
	var indexOfFromNode = this.graph[fromNode].indexOf(toNode);
	var indexOfToNode = this.graph[toNode].indexOf(fromNode);

	this.graph[fromNode] = this.graph[fromNode].slice(0, indexOfFromNode-1) + this.graph[fromNode].slice(indexOfFromNode +1);
	this.graph[toNode] = this.graph[toNode].slice(0, indexOfToNode-1) + this.graph[toNode].slice(indexOfToNode +1);
	
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	// cb === function
	for (var node in this.graph) {
		cb(parseInt(node)); 
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode = O(1);
 contains = O(1);
 removeNode = O(n);
 hasEdge = O(1);
 addEdge = O(1);
 removeEdge = O(n);
 forEachNode = O(n);

 */


