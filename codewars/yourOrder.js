const assert = require('assert');
const log = console.log;

function yourOrder(inputString) {
  const match = inputString.match(/([1-9])/g);
  if (match) {
    const wordsAndPosList = inputString.split([' ']).map((val, idx) => [val, match[idx]]);
    return wordsAndPosList.sort((a, b) => (a[1] - b[1])).map((val) => val[0]).join(' ');  
  } else {
    return "";
  }
}

log(yourOrder("is2 Thi1s T4est 3a"));

if (true) {
  assert.equal(yourOrder("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
  assert.equal(yourOrder("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
  assert.equal(yourOrder(""), "")

  log('test ok.')
}