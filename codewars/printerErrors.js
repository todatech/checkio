const assert = require('assert');
const log = console.log;

function errorPrinter(s) {
  return [s.split('').filter(val => !(val >= 'a' && val <= 'm')).length , s.length].join('/');
}

log(errorPrinter("aaabbbbhaijjjm"));

if (true) {
    assert.equal(errorPrinter("aaabbbbhaijjjm"), "0/14");
    assert.equal(errorPrinter("aaaxbbbbyyhwawiwjjjwwm"), "8/22")

    log('test ok.')
}