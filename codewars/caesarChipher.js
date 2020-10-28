const assert = require('assert');
const log = console.log;

const letters = 'abcdefghijklmnopqrstuvwxyz';
const sym = ' !@#$%^&*();';

function movingShift(s, shift) {

  let str = s.split('').map((val, idx) => {
    if (val.match(/[A-Z]/i)) {
      const uc = (val === val.toUpperCase());
      val = (uc) ? val.toLowerCase() : val;
      const res = letters[(val.charCodeAt(0) - 'a'.charCodeAt(0) + shift + idx) % 26]
      return (uc) ? res.toUpperCase() : res;
    } else {
      return val;
    }
  });

  const charsPerPart = (str.length % 5) ? Math.ceil(str.length / 5) : (str.length / 5);
  const arrLengths = [];
  let n = str.length;

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

  return arrLengths.map(val => str.splice(0, val).join(''))
}

function demovingShift(arr, shift) {
  const str = arr.join('').split('').map((val, idx) => {
    if (val.match(/[A-Z]/i)) {
      const uc = (val === val.toUpperCase());
      val = (uc) ? val.toLowerCase() : val;
      let wordLoc = val.charCodeAt(0) - 'a'.charCodeAt(0) - shift - idx
      while (wordLoc < 0) { wordLoc += 26; }
      const res = letters[wordLoc];
      return (uc) ? res.toUpperCase() : res;
    } else {
      return val;
    }
  })
  return str.join('');
}

let a;
log('m: ', a = movingShift("I should have known that you would have a perfect answer for me!!!", 1))
log('d: ', demovingShift(a, 1))

// O CAPTAIN! my Captain! our fearful trip is done;

//"J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"

if (false) {
  assert.equal();

}