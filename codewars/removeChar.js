const log = console.log;
const assert = require('assert');

const removeChar = (str) => str.slice(1, str.length - 1);

if (true) {
  assert.equal(removeChar('eloquent'), 'loquen');
  assert.equal(removeChar('country'), 'ountr');
  assert.equal(removeChar('person'), 'erso');
  assert.equal(removeChar('place'), 'lac');
  log('test ok...');
}