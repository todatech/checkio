const log = console.log;
const assert = require('assert');

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  const node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  let chained = null;

  chained = push(chained, 3);
  chained = push(chained, 2);
  chained = push(chained, 1);

  return chained;
}

if (true) {

  log(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
  log(push(null, 1).next, null, "Should be able to create a new linked list with push().");
  log(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
  log(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");

  log(buildOneTwoThree().data, 1, "First node should should have 1 as data.");
  log(buildOneTwoThree().next.data, 2, "First node should should have 1 as data.");
  log(buildOneTwoThree().next.next.data, 3, "Second node should should have 2 as data.");
  log(buildOneTwoThree().next.next.next, null, "Third node should should have 3 as data.");
} 