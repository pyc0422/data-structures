var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node set its variable to value
    //check if there is list.head or not if there is no head set it  to node
    //   set the tail to head
    //else there a head means its not empty
    //   set the tail.next to the new Node
    //   set the tail to be new node;
    //return list
    var newNode = Node(value); //{node.value : 10, node.next = null };
    if (list.head === null) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    return list;
  };

  list.removeHead = function() {
    //check the list is empty or not;
    // return undefined?
    //else list is not empty
    // set a new var to head value
    // set new head to origin head next
    // delete head value
    // return new var
    if (!list.head) {
      return undefined;
    }
    var curHead = list.head;
    list.head = curHead.next;
    curHead.next = null;
    return curHead.value;
  };

  list.contains = function(target) {
    //if the list is empty, return false;
    //set cur = list.head;
    //while cur; if(curent value === target) return true;
    // else set the current = current.next;
    // return false;
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
