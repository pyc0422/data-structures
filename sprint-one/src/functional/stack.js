var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[length] = value;
    length ++;
    return length;
  };

  someInstance.pop = function() {
    if (length === 0) {
      return undefined;
    }
    var delVal = someInstance[length - 1];
    someInstance[length - 1] = undefined;
    length --;
    return delVal;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
