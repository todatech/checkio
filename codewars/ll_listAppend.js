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

function append(listA, listB) {

  if (listA == null || listB == null) {
    return (listA) ? listA : (listB) ? listB : null;
  }

  let head = listA;
  for (; !!head.next; head = head.next);
  head.next = listB;
  return listA;
}

function buildOneTwoThree() {
  let chained = null;

  chained = push(chained, 3);
  chained = push(chained, 2);
  chained = push(chained, 1);

  return chained;
}
function buildOneTwoThreeFourFiveSix() {
  let chained = null;

  chained = push(chained, 6);
  chained = push(chained, 5);
  chained = push(chained, 4);
  chained = push(chained, 3);
  chained = push(chained, 2);
  chained = push(chained, 1);

  return chained;
}
function buildFourFiveSix() {
  let chained = null;

  chained = push(chained, 6);
  chained = push(chained, 5);
  chained = push(chained, 4);

  return chained;
}

function buildTwoOne() {
  let chain = null;
  chain = push(chain, 1); chain = push(chain, 2);
  return chain;
}
function buildOneTwo() {
  let chain = null;
  chain = push(chain, 2); chain = push(chain, 1);
  return chain;
}

//  log(append(null, null), null, "appending two empty lists should return null.");
// log(append(null, buildOneTwoThree()), buildOneTwoThree(), "appending a list to null should return the list.");
// log(append(buildOneTwoThree(), null), buildOneTwoThree(), "appending null to a list should return the list.");

// log(append(new Node(1), new Node(2)), buildOneTwo(), "appending a list to another list should return the concatenated list.");
// log(append(new Node(2), new Node(1)), buildTwoOne(), "appending a list to another list should return the concatenated list.");
// log(append(new Node(2), new Node(1)).next.next, null, "null should exist at end of concatenated linked list.");

log(append(buildOneTwoThree(), buildFourFiveSix()), buildOneTwoThreeFourFiveSix(), "appending a list to another list should return the concatenated list.");
// log(append(buildFourFiveSix(), buildOneTwoThree()), buildFourFiveSixOneTwoThree(), "appending a list to another list should return the concatenated list.");
// log(append(buildFourFiveSix(), buildOneTwoThree()).next.next.next.next.next.next, null, "null should exist at end of concatenated linked list.");
