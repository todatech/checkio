const log = console.log;
const assert = require('assert');

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
function sortedInsert(head, data) {
  if(!head || data < head.data) return new Node(data, head);
  else {
    head.next = sortedInsert(head.next, data);
    return head;
  }
}

function push(head, data) {
  const node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  let chained = null;
  chained = push(chained, 3);  chained = push(chained, 2);  chained = push(chained, 1);
  return chained;
}
function buildOneTwoThree() {
  let chained = null;
  chained = push(chained, 1);  chained = push(chained, 2);  chained = push(chained, 3);
  return chained;
}
function buildTwoOne() {
  let chained = null;
  chain = push(chain, 1); chain = push(chain, 2);
  return chain;
}

function insertSort(head) {

  if (!head || !head.next) return head;


}


if (true) {
  log(insertSort(null), null, "sorting an empty linked list should return null.");

  log(insertSort(new Node(5)).data, 5, "list should be return if length is 1.");

  // log(insertSort(buildOneTwo()).data, 1, "Node at index 0 of InsertSort(1 -> 2) should return 1.");
  // log(insertSort(buildOneTwo()).next.data, 2, "Node at index 1 InsertSort(1 -> 2) should return 2.");
  // log(insertSort(buildOneTwo()).next.next, null, "Index 2 of InsertSort(1 -> 2) should return null.");

  // log(insertSort(buildTwoOne()).data, 1, "Node at index 0 of InsertSort(2 -> 1) should return 1.");
  // log(insertSort(buildTwoOne()).next.data, 2, "Node at index 1 InsertSort(2 -> 1) should return 2.");
  // log(insertSort(buildTwoOne()).next.next, null, "Index 2 of InsertSort(2 -> 1) should return null.");

  // log(insertSort(buildOneTwoThree()).data, 1, "Node at index 0 of InsertSort(1 -> 2 -> 3) should return 1.");
  // log(insertSort(buildOneTwoThree()).next.data, 2, "Node at index 1 of InsertSort(1 -> 2 -> 3) should return 2.");
  // log(insertSort(buildOneTwoThree()).next.next.data, 3, "Node at index 2 of InsertSort(1 -> 2 -> 3) should return 3.");
  // log(insertSort(buildOneTwoThree()).next.next.next, null, "Value at index 3 of InsertSort(1 -> 2 -> 3) should be null.");

  // log(insertSort(buildThreeTwoOne()).data, 1, "Node at index 0 of InsertSort(3 -> 2 -> 1) should return 1.");
  // log(insertSort(buildThreeTwoOne()).next.data, 2, "Node at index 1 of InsertSort(3 -> 2 -> 1) should return 2.");
  // log(insertSort(buildThreeTwoOne()).next.next.data, 3, "Node at index 2 of InsertSort(3 -> 2 -> 1) should return 3.");
  // log(insertSort(buildThreeTwoOne()).next.next.next, null, "Value at index 3 of InsertSort(3 -> 2 -> 1) should be null.");

  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).data, 1, "Node at index 0 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 1.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.data, 2, "Node at index 1 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 2.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.data, 2, "Node at index 2 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 2.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.data, 3, "Value at index 3 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be 3.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.data, 4, "Value at index 4 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be 4.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.data, 5, "Value at index 5 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be 5.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.data, 6, "Value at index 6 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be 6.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.data, 8, "Value at index 7 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be 8.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.next.data, 9, "Value at index 8 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be 9.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.next.next.data, 9, "Value at index 9 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be 9.");
  // log(insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.next.next.next, null, "Value at index 10 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should be null.");
}