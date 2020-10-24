const assert = require('assert');
const log = console.log;

var maxSequence = function(arr){

  if (!Array.isArray(arr) || arr.length === 0) return 0

  //get a list of position of +ve int
  const posInt = arr.reduce((acc, val, idx) => {
    (val > 0) ? acc.push(idx) : 0;
    return acc;
  }, []);

  // for all -ve int cases, we exit with 0
  if (posInt.length === 0) return 0;

  // from posInt, we pick combinations of starting and 
  // ending position for pairs of +ve int
  const result = [];
  for (let i = 0; i < posInt.length; i++) {
    for (let j = i; j < posInt.length; j++) {

      // we slice the incoming arr and reduce the results
      const res = arr.slice(posInt[i], posInt[j] + 1)
        .reduce((acc, val) => {
          acc += val;
          return acc;
        }, 0);
      result.push(res);

    }
  }

  //find the max in result
  return result.reduce((acc, val) => {
    (acc < val) ? acc = val : 0;
    return acc;
  }, 0)
}

log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

if (false) {
  assert.equal(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
  log('test ok...')
}
