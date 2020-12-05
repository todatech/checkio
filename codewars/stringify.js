const log = console.log;
const assert = require('assert');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list) {

  let str = '';
  let currentNode = list;
  while (currentNode !== null) {
    str = str.concat(currentNode.data.toString(), ' -> ');
    currentNode = currentNode.next;
  }
  str = str.concat('null');

  return str;
}

if (true) {
  log(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
  log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
  log(stringify(null), "null");
}