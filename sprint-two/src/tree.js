var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // {value: 0, children: [
  //  {value:1, children: [
  //
  //  ]},
  //  {value: 2, chinldren:[{subavalue1:4, children:[{}]}]

  // }
  //]}
  var newTree = Tree(value);
  this.children.push(newTree);

};

treeMethods.contains = function(target) {
  //  {
  //   value: 2,
  //   chinldren:[
  //        {
  //          subavalue1:4,
  //          children:[
  //            {

  //             }]
  //            }]
  //   }
  // base case: if list.value === tagert return true;
  // recursion name(checkList): if not children.length === 0, return false;
  // else: for (var i = 0) checkList(list.children[i]);


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



/*
 * Complexity: What is the time complexity of the above functions?
 */
