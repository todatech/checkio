const assert = require('assert');
const log = console.log;

const encryptThis = function (text) {
  return text.split(' ')
    .map(val => {
      switch (val.length) {
        case 0:
          return '';
        case 1:
          return val.charCodeAt(0);
        case 2:
          return val.charCodeAt(0) + val[1];
        case 3:
          return val.charCodeAt(0) + val[2] + val[1];
        default:
          return val.charCodeAt(0) + val[val.length - 1] + val.slice(2, -1) + val[1]
      }
    })
    .join(' ');
}



log(encryptThis("Hello"));

if (true) {
  assert.equal(encryptThis("Hello"), "72olle");
  assert.equal(encryptThis("good"), "103doo");
  assert.equal(encryptThis("hello world"), "104olle 119drlo");
  assert.strictEqual(encryptThis("A"), "65");
  assert.strictEqual(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
  assert.strictEqual(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
  assert.strictEqual(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
  assert.strictEqual(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
  assert.strictEqual(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");


  log('test ok.')
}


// Other Best Solution
// const encryptThis = text => text
//   .split(' ')
//   .map(word => word
//   .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//   .replace(/^\w/, word.charCodeAt(0)))
//   .join(' ');

