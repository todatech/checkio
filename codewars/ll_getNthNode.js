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
  if (node === null)
    throw new Error('Null linked list should throw error.');
  let i = 0;
  for (; !!node; node = node.next, i++) {
    if (i === index)
      return node;
  }
  throw new Error('Invalid index value should throw error.');
}

if (true) {

  var list = buildOneTwoThree();
  log(getNth(list, 0).data, 1, "First node should be located at index 0.");
  log(getNth(list, 1).data, 2, "Second node should be located at index 1.");
  log(getNth(list, 2).data, 3, "Third node should be located at index 2.");
  log(getNth(list, 3))
  // assert.throws("Invalid index value should throw error.",  getNth(list, 3) );
  // assert.expectError("Invalid index value should throw error.", function () { getNth(list, 100) });
  // assert.expectError("Null linked list should throw error.", function () { getNth(null, 0) });

}