var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) >= 0) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  var indexOfItem = this._storage.indexOf(item);
  this._storage.splice(indexOfItem, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
add: O(1);
contains: O(1);
remove: O(1);
 */


