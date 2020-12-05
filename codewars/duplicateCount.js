const log = console.log;
const assert = require('assert');

function duplicateCount(text) {
  return Object.values(
    text.toLowerCase().split('').reduce((k, v) => {
      k[v] ? k[v] += 1 : k[v] = 1;
      return k;
    }, {}))
    .filter(v => v > 1).length;
}

if (true) {
  log(duplicateCount(""), 0);
  log(duplicateCount("abcde"), 0);
  log(duplicateCount("aabbcde"), 2);
  log(duplicateCount("aabBcde"), 2, "should ignore case");
  log(duplicateCount("Indivisibility"), 1)
  log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
}