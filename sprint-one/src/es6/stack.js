class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  push(val) {
    this[this.length] = val;
    this.length ++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    var del = this[this.length - 1];
    delete this[this.length - 1];
    this.length --;
    return del;
  }

  size() {
    return this.length;
  }
}

var newStack = new Stack();

