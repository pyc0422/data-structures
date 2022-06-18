var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startCount = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //add string to the top of the stack
    someInstance[startCount] = value;
    startCount++;
  };

  someInstance.pop = function() {
    delete someInstance[startCount];
    if (startCount > 0) {
      startCount--;
    }
    return someInstance[startCount];

  };

  someInstance.size = function() {
    return startCount;
  };

  return someInstance;
};
