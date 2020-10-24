const assert = require('assert');
const log = console.log;

function duplicateEncode(word) {
 const charList = word.toLowerCase().split('')
 let letterMap = charList.reduce((acc, val) => {
      (acc.hasOwnProperty(val) ? acc[val] += 1 : acc[val] = 1);
      return acc;
    }, {})

  return charList.map(letter => letterMap[letter] > 1 ? ')' : '(').join('');
}

log(duplicateEncode("din"));

if (true) {

  assert.equal(duplicateEncode("din"), "(((");
  assert.equal(duplicateEncode("recede"), "()()()");
  assert.equal(duplicateEncode("Success"), ")())())");
  // assert.equal(duplicateEncoder("(( @"), "))((");
  log('test ok.')
}
'(())())'
')())())'