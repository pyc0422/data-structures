var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail.next.previous = this.tail;
      list.tail = newNode;
    }
    return list;
  };

  list.removeHead = function() {
    if (!list.head) {
      return undefined;
    }
    if (list.head === list.tail) {
      var del = list.head;
      list.head = null;
      list.tail = null;
      return del.value;
    }
    var curHead = list.head;
    list.head = list.head.next;
    list.head.previous = null;
    curHead.next = null;
    return curHead.value;
  };

  list.contains = function(target) {
    if (!list.head) {
      return false;
    }
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  list.addToHead = function(val) {
    var node = Node(val);
    if (list.head === null) {
      list.head = node;
      list.tail = list.head;
    } else {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }


  };

  list.removeTail = function() {
    if (!list.head) {
      return undefined;
    }
    if (list.head === list.tail) {
      var del = list.head;
      list.head = null;
      list.tail = null;
      return del.value;
    }
    var del = list.tail;
    list.tail = del.previous;
    del.previous = null;
    list.tail.next = null;
    return del.value;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail: O(1);
removeHead: O(1);
contain: O(n);

 */
