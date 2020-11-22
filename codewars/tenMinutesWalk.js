const log = console.log;
const assert = require('assert');

function isValidWalk(walk) {

  let counter = {
    'n': 0, 'e': 0, 's': 0, 'w': 0
  }

  walk.forEach(v => counter[v] += 1);
  
  return (counter.n === counter.s &&
    counter.e === counter.w &&
    Object.values(counter).reduce((k, v) => k + v) === 10);
}

log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
log(isValidWalk(['w']), 'should return false');
log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');