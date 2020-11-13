const assert = require('assert');
const log = console.log;


Math.round = function (number) {
  return +number.toFixed(0);
};

Math.ceil = function (number) {
  let int = parseInt(number, 10);
  return (number > int )? int + 1: int;
};

Math.floor = function (number) {
  return parseInt(number, 10);
};

log(Math.ceil(0.4))
log(Math.ceil(0.5))
log(Math.ceil(1.0000));
log(Math.ceil(1.0100));

if (true) {
  assert.equal(Math.round(0.4), 0);
  assert.equal(Math.round(0.5), 1);

  assert.equal(Math.ceil(1), 1);
  assert.equal(Math.ceil(0.4), 1);
  assert.equal(Math.ceil(0.5), 1);

  assert.equal(Math.floor(0.4), 0, 'Math.floor(0.4)');
  assert.equal(Math.floor(0.5), 0, 'Math.floor(0.5)');
  log('test ok...')
}