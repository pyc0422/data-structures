var Queue = function() {
  var newQueue = Object.create(queueMethods);
  return newQueue;
};

var queueMethods = {
  length: 0,
  enqueue: function(val) {
    var key = this.length;
    while (this[key]) {
      key++;
    }
    this[key] = val;
    this.length ++;
    return this.length;
  },
  dequeue: function() {
    if (this.length === 0) {
      return undefined;
    }
    var curKey = 0;
    while (!this[curKey]) {
      curKey ++;
    }
    var firstVal = this[curKey];
    delete this[curKey];
    this.length --;
    return firstVal;
  },
  size: function() {
    return this.length;
  }
};


