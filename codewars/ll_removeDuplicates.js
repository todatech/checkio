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

function removeDuplicates(head) {
  if (!head)
    return null;

  let p, n = head;
  while (n.next !== null) {
    if (n.data == n.next.data) {
      n.next = n.next.next;
    } else {
      p = n; n = n.next;
    }
  }
  return head;
}

function buildOneTwoThree() {
  let chained = null;

  chained = push(chained, 3);
  chained = push(chained, 1);
  chained = push(chained, 1);

  return chained;
}
// log(removeDuplicates(null), null, "removing duplicates from null should return null.");

// log(removeDuplicates(new Node(23)).data, 23, "removing duplicates from linked list consisting of one node should return the node.");

log(removeDuplicates(buildOneTwoThree()), buildOneTwoThree(), "removing duplicates from a linked list without duplicates node should return the list.");
// log(removeDuplicates(buildOneTwoThreeFourFiveSix()), buildOneTwoThreeFourFiveSix(), "removing duplicates from linked list without duplicates node should return the list.");

// log(removeDuplicates(buildList([1, 2, 2])), buildList([1, 2]), "should remove the duplicate '2' entries");
// log(removeDuplicates(buildList([1, 1, 1, 1, 1])), buildList([1]), "should remove the duplicate '1' entries");
// log(removeDuplicates(buildList([1, 2, 3, 3, 4, 4, 5])), buildList([1, 2, 3, 4, 5]), "should remove the duplicate '3' and '4' entries");
// log(removeDuplicates(buildList([1, 1, 1, 1, 2, 2, 2, 2])), buildList([1, 2]), "should remove the duplicate '1' and '2' entries");
