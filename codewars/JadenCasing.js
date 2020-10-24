const assert = require('assert');
const log = console.log;

var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
    return this.split(' ').map(val => val.charAt(0).toUpperCase() + val.slice(1,)).join(' ');
}

log(str.toJadenCase());

if (true) {
    assert.equal(str.toJadenCase("How can mirrors be real if our eyes aren't real"), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    log('test ok.')
}