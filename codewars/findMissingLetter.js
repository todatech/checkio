const log = console.log;
const assert = require('assert');

function findMissingLetter(array) {

  const startCode = array[0].charCodeAt(0);
  for (let i = 0; i < array.length; i++) {
    const testCode = String.fromCharCode(startCode + i);
    if (i > 0 && (testCode !== array[i])) {
      return testCode;
    }
  }
}

log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');