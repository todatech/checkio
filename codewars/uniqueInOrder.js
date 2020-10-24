const assert = require('assert');
const log = console.log;

function uniqueInOrder(iterable) {

  let arr = (typeof (iterable) === 'string') ? iterable.split('') : iterable.slice()
  const res = arr.reduce((acc, val) => {
    const n = acc.length;
    if ((n === 0) || (acc[n - 1] !== val)) {
      acc.push(val)
    };
    return acc;
  }, [])

  return res;

}

// log(uniqueInOrder('AAAABBBCCDAABBB'));
log(uniqueInOrder([1,2,2,3,3]));


if (false) {
  //   assert.equal(vowelCount("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
  assert.equal(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
  assert.equal(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
  assert.equal(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
  log('test ok.')
}

