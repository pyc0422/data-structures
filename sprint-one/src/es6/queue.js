class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  enqueue(val) {
    var key = this.length;
    while (this[key]) {
      key ++;
    }
    this[key] = val;
    this.length ++;
    return this.length;
  }

  dequeue() {
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
  }

  size() {
    return this.length;
  }

}

var newQueue = new Queue();
