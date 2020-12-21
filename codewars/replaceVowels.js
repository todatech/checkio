const log = console.log;
const assert = require('assert');

const replace = s => s.split('').map(v => v.replace(RegExp(/[aeiou]/, 'gi'), '!')).join('');

log(replace("Hi!"), "H!!")
log(replace("!Hi! Hi!"), "!H!! H!!")
log(replace("aeiou"), "!!!!!")
log(replace("ABCDE"), "!BCD!")