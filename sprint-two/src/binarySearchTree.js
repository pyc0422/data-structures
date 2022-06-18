var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  _.extend(newBST, BSTmethod);
  return newBST;
};


var BSTmethod = {
  insert: function(val) {
    var newNode = BinarySearchTree(val);
    if (this.value === undefined) {
      this.value = val;
      return this;
    }
    var cur = this;

    while (true) {
      if (val > cur.value) {
        if (cur.right === null) {
          cur.right = newNode;
          return this;
        } else {
          cur = cur.right;
        }
      } else {
        if (cur.left === null) {
          cur.left = newNode;
          return this;
        } else {
          cur = cur.left;
        }
      }
    }
  },
  contains: function(val) {

    if (this.value === null) {
      return false;
    }
    var cur = this;
    while (cur) {
      if (cur.value === val) {
        return true;
      }
      if (cur.value < val) {
        if (!cur.right) {
          return false;
        }
        cur = cur.right;
      }
      if (cur.value > val) {
        if (!cur.left) {
          return false;
        }
        cur = cur.left;
      }
    }

  },
  depthFirstLog: function(cb) {
    var func = function(bst) {
      cb(bst.value);
      if (bst.left !== null) {
        func(bst.left);
      }
      if (bst.right !== null) {
        func(bst.right);
      }
    };
    func(this);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   insert: O(log n);
   contain:O(log n);
   depthFirstLog: O(n);

 */
