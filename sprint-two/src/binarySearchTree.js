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
    //check newBST is empty or not
    //   if empty return false
    //if not empty use while loop to iterate all element in newBST
    //var cur = this;
    //while(true)
    //if(cur.value === value) return true;
    //else if cur.value < value
    //       if cur.right -> cur = cur.right
    //        else return false;
    // else if cur.value > value
    //       if cur.left exist -> cur = cur.left
    //       else return false;
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
   // var func = BSTmethod.depthFirstLog;
  //cb(this.value);
  // if(this.value !== null && this.left === null && this.right === null cb(this.value))
     // this.left ! == null cb(this.left.value)
     //this.right !== null cb(this.right.value)
     // if this.left.left !== null recursion
     // if this.left'lefr!== null recursion
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
