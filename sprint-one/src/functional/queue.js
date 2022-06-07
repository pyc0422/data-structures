var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    var key = length;
    someInstance[key] = value;
    length ++;
    return length;
  };

  someInstance.dequeue = function() {
    if (length === 0) {
      return undefined;
    }
    // if (someInstance[firstKey] === undefined) {
    //   firstKey ++;
    // } else {
    //   var firstValue = someInstance[firstKey];
    //   delete someInstance[firstKey];
    //   length --;
    //   return firstValue;
    // }
    var firstValue = someInstance[0];
    someInstance[0] = someInstance[1];
    delete someInstance[1];
    length --;
    return firstValue;
  };

  someInstance.size = function() {
    return length;
  };
  return someInstance;
};
