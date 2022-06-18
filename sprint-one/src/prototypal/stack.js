var Stack = function() {
  var someInstance = Object.create(stackMethods);
  return someInstance;
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
    var delValue = this[this.length - 1];
    delete this[this.length - 1];
    this.length --;
    return delValue;
  },
  size: function() {
    return this.length;
  }
};


