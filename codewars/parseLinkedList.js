const log = console.log;
const { notEqual } = require('assert');
const assert = require('assert');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function parse(string) {
  const strArr = string.slice().split(' -> ')
  strArr.splice(strArr.indexOf('null'), 1);
  if (!strArr.length) return null;

  let firstNode;
  let prevNode;
  strArr.forEach((word, idx) => {
    if (!idx) {
      firstNode = new Node(+word);
      prevNode = firstNode;
    } else {
      let newNode = new Node(+word);
      prevNode.next = newNode;
      prevNode = newNode;
    }
  })
  return firstNode;
}

// log(parse("1 -> 2 -> 3 -> null"));

if (true) {
  assert.deepEqual(parse("1 -> 2 -> 3 -> null"), new Node(1, new Node(2, new Node(3))));
  assert.deepEqual(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"), new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
  assert.deepEqual(parse("null"), null);
  log('test ok...');
}