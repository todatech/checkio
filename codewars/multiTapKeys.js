const log = console.log;
const assert = require('assert');

function taps(letter) {

  function charToHex(char) {
    return Number(char.charCodeAt(0)).toString(16);
  }

  const hexCode = charToHex(letter.toUpperCase());

  num = parseInt((hexCode[1]), 16);
  switch (Number(hexCode[0])) {
    
    // 0x2_  space-(20)
    case 2:
      return (num === 0)?  1 : 0

    // 0x3_ numbers
    case 3:
      if (num >= 0 && num <= 9) {
        if (num === 0) {
          return 2;   // space - 0
        } else if (num === 1) {
          return 1;
        } else if ((num === 7) || (num === 9)) {
          return 5;
        } else {
          return 4;
        }
      } else {
        return 0; // out of range
      }

    // 0x4_ will be A-O (_,3,3,3,3,3)
    case 4:
      return (num >= 1 && num <= 15)? (((num - 1) % 3) + 1): 0;

    // 0x5_ will be P-Z (4,3,4)
    case 5:
      if (num >= 0 && num <= 10) {
        if (num >= 0 && num <= 3) return num + 1;
        if (num >= 4 && num <= 6) return num - 3;
        if (num >= 7 && num <= 10) return num - 6;
      } else {
        return 0; //out of range
      }
    default:
      return 0;
  }
}

function presses(phrase) {

  let totalTaps = 0;
  phrase.split('').forEach(letter => {
    totalTaps += taps(letter);
  })
  return totalTaps;
}

log(presses('WHERE DO U WANT 2 MEET L8R'))
// log(presses('0123456789'))
// log(presses(' abcdefghijklmno'))
// log(presses('pqrstuvwxyz'))

// log(taps('p'))


if (false) {
  assert.equal(presses('WHERE DO U WANT 2 MEET L8R'), 47);
  log('test ok')
}