const assert = require('assert');
const log = console.log;


const letters = 'abcdefghijklmnopqrstuvwxyz';

function encodeStr(s, shift) {

  function encodeChar(val, shift) {
    if (val.match(/[A-Z]/i)) {
      const uc = (val === val.toUpperCase());
      val = (uc) ? val.toLowerCase() : val;
      const res = letters[(val.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26]
      return (uc) ? res.toUpperCase() : res;
    } else {
      return val;
    }
  }

  // encode the string
  let str = s.split('').map((val, idx) => {
    const char = encodeChar(val, shift);
    return (idx === 0) ? (val.toLowerCase() + char.toLowerCase() + char) : char;
  }).join('');

  // split the string into proper pieces
  const arrLengths = [];
  let n = str.length;
  const charsPerPart = Math.ceil(str.length / 5);

  for (let i = 0; i < 5; i++) {
    if (n >= charsPerPart) {
      arrLengths.push(charsPerPart);
      n -= charsPerPart
    } else if (n < charsPerPart) {
      arrLengths.push(n);
      n = 0;
    } else if (n == 0) {
      arrLengths.push(0);
    }
  }

  // outputting string
  const strLst = str.split('');
  return arrLengths.reduce((acc, val) => {
    (val) ? acc.push(strLst.splice(0, val).join('')): 0;
    return acc;
  }, []);
}


function decode(arr) {

  function decodeChar(val, shift) {
    if (val.match(/[A-Z]/i)) {
      const uc = (val === val.toUpperCase());
      val = (uc) ? val.toLowerCase() : val;
      let wordLoc = val.charCodeAt(0) - 'a'.charCodeAt(0) - shift
      while (wordLoc < 0) { wordLoc += 26; }
      const res = letters[wordLoc];
      return (uc) ? res.toUpperCase() : res;
    } else {
      return val;
    }
  }

  function decodeShift(fragment) {
    let shift = fragment.charCodeAt(1) - fragment.charCodeAt(0);
    while (shift < 0 ) { shift += 26 }
    return shift;
  }

  const str = arr.join('');
  const shift = decodeShift(str.slice(0,2));
  return str.split('').map((val, idx) => (idx >= 2) ? decodeChar(val, shift): '').join('');
}

let a;
// log('m: ', a = encodeStr("I should have known that you would have a perfect answer for me!!!", 1))
// log('m: ', a = encodeStr("I have spread my dreams under your feet; Tread softly because you tread on my dreams. William B Yeats (1865-1939)", 2))
a = [ 'ihH gzud roqdzc lx cqdz',
  'lr tmcdq xntq edds; Sqd',
  'zc rneskx adbztrd xnt s',
  'qdzc nm lx cqdzlr. Vhkk',
  'hzl A Xdzsr (1865-1939)' ]
log('d: ', decode(a))
// log('d: ', demovingShift(a, 1))


if (false) {
  assert.equal();

  // u = "I should have known that you would have a perfect answer for me!!!"
  // v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]
  // Test.assertSimilar(decode(v), u)

  // u = "O CAPTAIN! my Captain! our fearful trip is done;"
  // v = ["opP DBQUBJ", "O! nz Dbqu", "bjo! pvs g", "fbsgvm usj", "q jt epof;"]
  // Test.assertSimilar(encodeStr(u, 1), v)

}