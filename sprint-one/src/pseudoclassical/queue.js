var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Queue.prototype.enqueue = function(val) {
  var key = this.length;
  while (this[key]) {
    key ++;
  }
  this[key] = val;
  this.length ++;
  return this.length;
};
Queue.prototype.dequeue = function() {
  if (this.length === 0) {
    return undefined;
  }
  var curKey = 0;
  while (!this[curKey]) {
    curKey ++;
  }
  var first = this[curKey];
  delete this[curKey];
  this.length --;
  return first;
};
Queue.prototype.size = function() {
  return this.length;
};
var newQueue = new Queue();


