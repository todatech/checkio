const log = console.log;
const assert = require('assert');

function sortArray(array) {
  const oddSorted = array.filter(v => (v % 2)).sort((a, b) => a - b);
  const iter = oddSorted[Symbol.iterator]();
  return array.map(v => (v % 2) ? iter.next().value : v);
}

if (true) {
  log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
  log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
  log(sortArray([]), [])
}