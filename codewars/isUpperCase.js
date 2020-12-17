const log = console.log;
const assert = require('assert');

String.prototype.isUpperCase = function () {
  return this.split('').every(v => v === v.toUpperCase());
}


log(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase')
log('c'.isUpperCase(), false, 'c is not upper case');
log('C'.isUpperCase(), true, 'C is upper case');
log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

log('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
log('hello world'.isUpperCase(), false, 'hello world is not upper case');
log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
log('hello World'.isUpperCase(), false, 'hello World is not upper case');
log('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
log('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
log('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
log('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
log('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
log('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
log('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
log('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
log('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
log('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
log('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
log('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');