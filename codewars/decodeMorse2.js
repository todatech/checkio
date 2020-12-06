const assert = require('assert');

const MORSE_CODE = {
  '.-': 'a', '-...': 'b', '-.-.': 'c',
  '-..': 'd', '.': 'e', '..-.': 'f',
  '--.': 'g', '....': 'h', '..': 'i',
  '.---': 'j', '-.-': 'k', '.-..': 'l',
  '--': 'm', '-.': 'n', '---': 'o',
  '.--.': 'p', '--.-': 'q', '.-.': 'r',
  '...': 's', '-': 't', '..-': 'u',
  '...-': 'v', '.--': 'w', '-..-': 'x',
  '-.--': 'y', '--..': 'z', '-----': '0',
  '.----': '1', '..---': '2', '...--': '3',
  '....-': '4', '.....': '5', '-....': '6',
  '--...': '7', '---..': '8', '----.': '9',
}

const log = console.log;

// find the greatest common factor in an array of numbers
function gcf(arr) {
  let gcd = 1, n = Math.min(...arr);
  for (let g = 2; g <= n; g++) {
    for (const [i, v] of arr.entries()) {
      if (v % g)
        break;
      if (arr.length - 1 === i)
        gcd = g;
    }
  }
  return gcd;
}

const decodeBits = function (bits) {

  // split stream by 1's and remove the first and last element, possible empty or 0's elem
  const arr = bits.slice().split(/(1+)/);
  arr.pop();  arr.shift();

  // find timing multiple by counting 1's and 0's in every elements in a set
  const set = new Set(arr);
  const consectiveBits = Array.from(set).map(v => v.length);
  const timing = gcf(consectiveBits);

  // sample once per timing and translate 0's & 1's to dots & dashes
  return arr.join('').split('').reduce((k, v, i) => {
    (i % timing) ? 0 : k.push(v);
    return k;
  }, [])
    .join('')
    .replace(/111/g, '-')
    .replace(/0000000/g, '   ')
    .replace(/000/g, ' ')
    .replace(/1/g, '.')
    .replace(/0/g, '');
}

const decodeMorse = code => code.trim().split('   ').map(word => word.split(' ').map(v => MORSE_CODE[v]).join('').toUpperCase()).join(' ');

if (true) {
  // log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  log(decodeBits('00011001100110011000000110000001111110011001111110011111100000000000000110011111100111111001111110000001100110011111100000011111100110011000000110000'));
  // log(decodeMorse(decodeBits('1110111')));
  // log(decodeBits('1'))

}
