var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};
/*
tree = {value: 1,
        parants: null,
        children: [
          {value: 2,
           parent:1
           children:[]}}
        ]}
*/
var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
  newTree.parent = this;
};

treeMethods.contains = function(target) {
  var checkList = function(list) {
    if (list.value === target) {
      return true;
    }
    if (list.children.length === 0) {
      return false;
    }
    for (var i = 0; i < list.children.length; i++) {
      var res = checkList(list.children[i]);
      if (res === true) {
        return true;
      }
    }
    return false;

  };
  return checkList(this);
};

treeMethods.removeFromParent = function(target) {
  var recursion = function(item) {
    for (var i = 0; i < item.length; i++) {
      if (item[i].value === target) {
        var findTarget = item[i];
        item.splice(i, 1);
        findTarget.parent = null;
      }
      if (item[i].children.length !== 0) {
        recursion(item[i].children);
      }
    }
  };
  if (this.children && this.children.length) {
    recursion(this.children);
  }

};

treeMethods.traverse = function(cb) {
  var checkList = function(list) {
    list.value = cb(list.value);
    if (list.children && list.children.length) {
      for (var i = 0; i < list.children.length; i++) {
        checkList(list.children[i]);
      }
    }
  };
  checkList(this);
};




/*
 * Complexity:  What is the time complexity of the above functions?
addChild: O(1);
contains:O(n^2);
 */
