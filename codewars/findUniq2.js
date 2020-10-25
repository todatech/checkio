const assert = require('assert');
const log = console.log;

function findUniq(arr) {

  let sureIs, sureNot;
  const a = arr.slice(0, 3);
  const filtered = a.filter(val => (val === a[0]));

  switch (filtered.length) {
    case 3:
      sureNot = a[0];
      sureIs = arr.slice(3,).find(val => val !== sureNot);
      break;
    case 2:
      sureNot = a[0];
      sureIs = a.find(val => val !== sureNot);
      break;
    case 1:
      sureNot = a[1];
      sureIs = a[0];
      break;
  }
  return sureIs;
}


log(findUniq([1, 1, 1, 2, 1, 1]))
log(findUniq([1, 1, 2]))
log(findUniq([1, 2, 1]))
log(findUniq([2, 1, 1]))
log(findUniq([1, 1, 2, 1, 1, 1]))

if (false) {

  assert.equal(findUniq([1, 1, 1, 2, 1, 1]), 2);
  assert.equal(findUniq([0, 0, 0.55, 0, 0]), 0.55);
  log('test ok')
}