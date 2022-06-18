

// Instantiate a new graph
var Graph = function() {
  this.list = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.list[node] = [];
  return this;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.list[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.list[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.list[fromNode] === undefined || this.list[toNode] === undefined) {
    return false;
  }
  if (this.list[fromNode].includes(toNode) || this.list[toNode].includes(fromNode) ) {
    return true;
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.list[fromNode].push(toNode);
  this.list[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // this.list[fromNode].filter(function(node) {
  //   node !== toNode;
  // });

  // this.list[toNode].filter(function(node) {
  //   node !== fromNode;
  // });
  var index1 = this.list[fromNode].indexOf(toNode);
  this.list[fromNode].splice(index1, 1);
  var index2 = this.list[toNode].indexOf(fromNode);
  this.list[toNode].splice(index2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate whole list assign key as arugments to cb function;
  for (var key in this.list) {
    cb(key);
  }

};
var graph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1);
 contains: O(1);
 remove:O(1);
 hasEdge: O(n);
 addEdge: O(1);
 removeEdge: O(n);
 forEach: O(n);
 */


