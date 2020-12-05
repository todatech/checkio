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
  chained = push(chained, 3); chained = push(chained, 2); chained = push(chained, 1);
  return chained;
}

function sortedInsert(head, data) {

  let n = head;
  if (!n || (data <= n.data)) {
    return push(head, data);
  } else {
    const node = new Node(data);
    for (; !!n; n = n.next) {
      if (!!n.next && n.data <= data && data <= n.next.data) {
        node.next = n.next;
        n.next = node;
        return head;
      } else if (!n.next && n.data <= data) {
        n.next = node;
        return head;
      }
    }
  }
}

if (true) {
  log(sortedInsert(null, 23).data, 23, "should be able to insert a node on an empty/null list.");
  log(sortedInsert(null, 23).next, null, "value at index 1 should be null.");

  log(sortedInsert(buildOneTwoThree(), 0.5).data, 0.5, "should be able to insert new node at head of list.");
  log(sortedInsert(buildOneTwoThree(), 0.5).next.data, 1, "value for node at index 1 should be 1.");
  log(sortedInsert(buildOneTwoThree(), 0.5).next.next.data, 2, "value for node at index 2 should be 2.");
  log(sortedInsert(buildOneTwoThree(), 0.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
  log(sortedInsert(buildOneTwoThree(), 0.5).next.next.next.next, null, "value at index 4 should be null.");

  log(sortedInsert(buildOneTwoThree(), 1.5).data, 1, "value for node at index 0 should be 1.");
  log(sortedInsert(buildOneTwoThree(), 1.5).next.data, 1.5, "value for node at index 1 should be 1.5");
  log(sortedInsert(buildOneTwoThree(), 1.5).next.next.data, 2, "value for node at index 2 should be 2.");
  log(sortedInsert(buildOneTwoThree(), 1.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
  log(sortedInsert(buildOneTwoThree(), 1.5).next.next.next.next, null, "value at index 4 should be null.");

  log(sortedInsert(buildOneTwoThree(), 2.5).data, 1, "head should remain unchanged after inserting new node at index 2");
  log(sortedInsert(buildOneTwoThree(), 2.5).next.data, 2, "value at index 1 should remain unchanged after inserting new node at index 2");
  log(sortedInsert(buildOneTwoThree(), 2.5).next.next.data, 2.5, "value for node at index 2 should be 2.5.");
  log(sortedInsert(buildOneTwoThree(), 2.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
  log(sortedInsert(buildOneTwoThree(), 2.5).next.next.next.next, null, "value at index 4 should be null.");

  log(sortedInsert(buildOneTwoThree(), 3.5).data, 1, "head should remain unchanged after inserting new node at tail");
  log(sortedInsert(buildOneTwoThree(), 3.5).next.data, 2, "value at index 1 should remain unchanged after inserting new node at tail");
  log(sortedInsert(buildOneTwoThree(), 3.5).next.next.data, 3, "value for node at index 2 should be 3.");
  log(sortedInsert(buildOneTwoThree(), 3.5).next.next.next.data, 3.5, "value for node at index 3 should be 3.5.");
  log(sortedInsert(buildOneTwoThree(), 3.5).next.next.next.next, null, "value at index 4 should be null.");
}