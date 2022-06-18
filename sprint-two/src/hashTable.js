

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  }
  var find = false;
  for (var i = 0; i < this._storage[index].length; i++) {
    if ( this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
      find = true;
      break;
    }
  }
  if (!find) {
    this._storage[index].push([k, v]);
  }
  //[[[k1, v3], [k2, v2], [k3, v3]]

};
// storage = [[[k1,v1], [k3, v3]],[[k2, v2]]];
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    return undefined;
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i] === undefined) {
      return undefined;
    }
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    return undefined;
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i] = undefined;
    }
  }
};
// []


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1);
retrieve: O(1);
remove: O(1);
 */


