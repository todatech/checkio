const assert = require('assert');
const log = console.log;

function XO(inputString) {
  const result = inputString.slice().toLowerCase().split('').reduce((acc, val) => {
    if (val === 'x') {
      acc[0] += 1;
    } else if (val === 'o') {
      acc[1] += 1;
    }
    return acc;
  }, [0, 0])

  return (result[0] === result[1])
}

log(XO("ooxx"));

if (true) {

  assert.equal(XO("ooxx"), true);
  assert.equal(XO("ooxx"), true)
  assert.equal(XO("xooxx"), false)
  assert.equal(XO("ooxXm"), true)
  assert.equal(XO("zpzpzpp"), true) // when no 'x' and 'o' is present should return true
  assert.equal(XO("zzoo"), false)

  log('test ok.')
}