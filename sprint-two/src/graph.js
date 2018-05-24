var Graph = function() {
  this.edges = [];
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
  this.edges.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.edges[fromNode].indexOf(toNode);
  this.edges[fromNode].splice(index, 1);
  this.edges[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(node => cb(node));
};


/*
 * Complexity: What is the time complexity of the above functions?
 Add node: O(1)
 Contains: O(n)
 Remove: O(n)
 HasEdge: O(n)
 AddEdge: O(1)
 RemoveEdge: O(n)
 ForEachNode: O(n)
 */
