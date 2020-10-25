const assert = require('assert');
const log = console.log;

function findUniq(arr) {

  function testFirstThreeElem(a) {
    let sureIs, sureNot;
    if (a[0] === a[1]) {
      sureNot = a[0];
      if (sureNot === a[2]) {
        // cannot find because all of them sureNot, we can proceed to find others
      } else { sureIs = a[2]; }
    } else {
      if (a[0] === a[2]) { sureIs = a[1]; sureNot = a[0]; }
      else {
        if (a[1] === a[2]) { sureIs = a[0]; sureNot = a[1]; }
        else { console.log('bug in question') }
      }
    }
    return [sureIs, sureNot];
  }

  const [sureIs, sureNot] = testFirstThreeElem(arr);

  if (sureIs) return sureIs;
  else {
    b = arr.slice(3,);
    for (let i = 0; i < b.length; i++) {
      if (b[i] !== sureNot) return b[i];
    }
  }
}


log(findUniq([1, 1, 1, 2, 1, 1]))
log(findUniq([1, 1, 1]))
log(findUniq([1, 1, 2, 1, 1, 1]))
log(findUniq([1, 2, 1]))
// log(findUniq([2, 1, 3]))

if (true) {

  assert.equal(findUniq([1, 1, 1, 2, 1, 1]), 2);
  assert.equal(findUniq([0, 0, 0.55, 0, 0]), 0.55);
  log('test ok')
}