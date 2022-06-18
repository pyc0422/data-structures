var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var key = length;
    while (someInstance[key]) {
      key ++;
    }
    someInstance[key] = value;
    length ++;
    return length;
  };

  someInstance.dequeue = function() {
    //if object is empty just return undefined;
    if (length === 0) {
      return undefined;
    }
    var curKey = 0;
    while (someInstance[curKey] === undefined) {
      curKey ++;
    }
    var firstValue = someInstance[curKey];
    delete someInstance[curKey];
    length --;
    return firstValue;
  };

  someInstance.size = function() {
    return length;
  };
  return someInstance;
};
