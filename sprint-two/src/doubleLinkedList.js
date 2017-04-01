var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    var doubleLinkedListNode = new Node(value);
    if ( list.head === null ){
      list.head = doubleLinkedListNode;
    }
    if ( list.tail !== null ) {
      list.tail.next = doubleLinkedListNode;
    }
    
    list.tail = doubleLinkedListNode;
  };

  list.addToHead = function(value){
    var doubleLinkedListNode = new Node(value);
    if(list.head === null){
      list.head = doubleLinkedListNode;
    }else{
      doubleLinkedListNode.next = list.head;
      list.head = doubleLinkedListNode;
      list.tail = doubleLinkedListNode.next;
      list.tail.prev = list.head;
    }

  };

  list.removeTail = function() {
    var listTail = list.tail;
    list.tail = listTail.prev;
    return listTail.value;
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 constant time to add or remove items from linked list
 linear time to check contains of linked list
 */
