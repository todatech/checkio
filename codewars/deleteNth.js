const log = console.log;
const assert = require('assert');

function deleteNth(arr, n) {
  let result = [];

  arr.reduce((k, v) => {
    (k[v] === undefined) ? k[v] = 1 : k[v] += 1;
    if (k[v] <= n) {
      result.push(v);
    }
    return k;
  }, {})

  return result;
}

log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2), [1, 2, 3, 1, 2, 3])

if (true) {
  log(deleteNth([1, 1, 1, 1], 2), [1, 1])
  log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
  log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  log('test ok...');
}