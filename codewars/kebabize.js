const assert = require('assert');
const log = console.log;

function kebabize(str) {
  return str.slice().replace(/\d/g, '')
    .replace(/([A-Z])/g, (_match, char, offset) => {
      return ((offset) ?  '-': '') + char.toLowerCase();
    });
}

log(kebabize("camelsHaveThreeHumps"));

if (true) {
  
  assert.equal(kebabize('Bgh'), "bgh");
  assert.equal(kebabize('camelsHaveThreeHumps'), "camels-have-three-humps");
  assert.equal(kebabize('camelsHave3Humps'), 'camels-have-humps');
  log('test ok.')
}