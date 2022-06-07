var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    if (start < end) {
      var value = someInstance[start];
      delete someInstance[start];
      start++;
      return value;
    }

  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
