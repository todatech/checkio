const assert = require('assert');
const log = console.log;

function disemVowel(inputString) {
    return inputString.replace(/[aeiouAEIOU]/g, '');
}

log(disemVowel("This website is for losers LOL!"));

if (true) {
  assert.equal(disemVowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
  log('test ok.')
}