var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  length: 0,
  enqueue: function(value) {
    var key = this.length;
    while (this[key] !== undefined) {
      key ++;
    }
    this[key] = value;
    this.length ++;
    return this.length;
  },
  dequeue: function() {
    if (this.length === 0) {
      return undefined;
    }
    var curKey = 0;
    while (this[curKey] === undefined) {
      curKey ++;
    }
    var firstValue = this[curKey];
    delete this[curKey];
    this.length --;
    return firstValue;
  },
  size: function() {
    return this.length;
  }
};


