const log = console.log;
const assert = require('assert');

// const str1 = s.split('').map((v, i) => (i % 2) ? v : v.toUpperCase()).join('');
// const str2 = s.split('').map((v, i) => (i % 2) ? v.toUpperCase() : v).join('');
// return [str1, str2];
function capitalize(s) {
  return s.split('').reduce((k, v, i) => {
    const a = v;
    const b = v.toUpperCase();
    k[0] = k[0].concat((i % 2) ? a : b);
    k[1] = k[1].concat((i % 2) ? b : a);
    return k;
  }, ['', '']);
};

log(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);