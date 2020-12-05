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

function length(head) {
  let i = 0;
  for (; !!head; i++, head = head.next);
  return i;
}

function count(head, data) {
  let counter = 0;
  for (; !!head; head = head.next) {
    if (head.data === data) counter++;
  }
  return counter;
}

if (true) {
  var list = buildOneTwoThree();

  log(length(null), 0, "Length of null list should be zero.");
  log(length(new Node(99)), 1, "Length of single node list should be one.");
  log(length(list), 3, "Length of the three node list should be three.");

  log(count(list, 1), 1, "list should only contain one 1.");
  log(count(list, 2), 1, "list should only contain one 2.");
  log(count(list, 3), 1, "list should only contain one 3.");
  log(count(list, 99), 0, "list should return zero for integer not found in list.");
  log(count(null, 1), 0, "null list should always return count of zero.");

}