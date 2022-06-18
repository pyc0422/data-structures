var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  length: 0,
  push: function(val) {
    this[this.length] = val;
    this.length++;
    return this.length;
  },
  pop: function() {
    if (this.length === 0) {
      return undefined;
    }
    var delVal = this[this.length - 1];
    delete this[this.length - 1];
    this.length --;
    return delVal;
  },
  size: function() {
    return this.length;
  }
};
