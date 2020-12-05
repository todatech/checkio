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

function getNth(node, index) {
  let n = node
  if (n === null)
    throw new Error('Null linked list should throw error.');
  let i = 0;
  for (; !!n; n = n.next, i++) {
    if (i === index)
      return n;
  }
  throw new Error('Invalid index value should throw error.');
}

function insertNth(head, index, data) {

  if (!index) {
    return push(head, data);
  } else {
    const leftNode = getNth(head, index - 1);
    const rightNode = leftNode.next;
    const node = new Node(data);
    node.next = rightNode;
    leftNode.next = node;
    return head;
  }
}

if (true) {
  log(insertNth(null, 0, 12).data, 12, "should be able to insert a node on an empty/null list.");
  log(insertNth(null, 0, 12).next, null, "value at index 1 should be null.");

  log(insertNth(buildOneTwoThree(), 0, 23).data, 23, "should be able to insert new node at head of list.");
  log(insertNth(buildOneTwoThree(), 0, 23).next.data, 1, "value for node at index 1 should be 1.");
  log(insertNth(buildOneTwoThree(), 0, 23).next.next.data, 2, "value for node at index 2 should be 2.");
  log(insertNth(buildOneTwoThree(), 0, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
  log(insertNth(buildOneTwoThree(), 0, 23).next.next.next.next, null, "value at index 4 should be null.");

  log(insertNth(buildOneTwoThree(), 1, 23).data, 1, "value for node at index 0 should be 1.");
  log(insertNth(buildOneTwoThree(), 1, 23).next.data, 23, "value for node at index 1 should be 23");
  log(insertNth(buildOneTwoThree(), 1, 23).next.next.data, 2, "value for node at index 2 should be 2.");
  log(insertNth(buildOneTwoThree(), 1, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
  log(insertNth(buildOneTwoThree(), 1, 23).next.next.next.next, null, "value at index 4 should be null.");

  log(insertNth(buildOneTwoThree(), 2, 23).data, 1, "head should remain unchanged after inserting new node at index 2");
  log(insertNth(buildOneTwoThree(), 2, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at index 2");
  log(insertNth(buildOneTwoThree(), 2, 23).next.next.data, 23, "value for node at index 2 should be 23.");
  log(insertNth(buildOneTwoThree(), 2, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
  log(insertNth(buildOneTwoThree(), 2, 23).next.next.next.next, null, "value at index 4 should be null.");

  log(insertNth(buildOneTwoThree(), 3, 23).data, 1, "head should remain unchanged after inserting new node at tail");
  log(insertNth(buildOneTwoThree(), 3, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at tail");
  log(insertNth(buildOneTwoThree(), 3, 23).next.next.data, 3, "value for node at index 2 should be 3.");
  log(insertNth(buildOneTwoThree(), 3, 23).next.next.next.data, 23, "value for node at index 3 should be 23.");
  log(insertNth(buildOneTwoThree(), 3, 23).next.next.next.next, null, "value at index 4 should be null.");

  // log("Invalid index value should throw error.", insertNth(buildOneTwoThree(), 4, 23));
}