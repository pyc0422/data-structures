var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = [];
  this.start = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.start] = value;
  this.start++;
};

Stack.prototype.pop = function() {
  if (this.start > 0) {
    this.start--;
    var value = this.storage[this.start];
    delete this.storage[this.start];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.start;
};



