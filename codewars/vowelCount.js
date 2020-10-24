const assert = require('assert');
const log = console.log;

function vowelCount(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

log(vowelCount("Th"));

if (false) {
    //   assert.equal(vowelCount("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");

    log('test ok.')
}