var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    var linkedListNode = new Node(value);
    if ( list.head === null ){
      list.head = linkedListNode;
    }
    if ( list.tail !== null ) {
      list.tail.next = linkedListNode;
    }
    
    list.tail = linkedListNode;


  };

  list.removeHead = function() {
    var listHead = list.head;
    list.head = list.head.next;
    return listHead.value;

  };

  list.contains = function(target) {
    var currentNode = list.head;
    while ( currentNode ) {
      if ( currentNode.value === target ) {
        return true;
      }
      else {
        currentNode = currentNode.next;
      }
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
 constant time to add or remove items from linked list
 linear time to check contains of linked list
 */
