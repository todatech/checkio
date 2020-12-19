const log = console.log;
const assert = require('assert');

const corpus = {
  'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
  'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
  'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
  'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19,
  'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
  'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
  'hundred': 100, 'thousand': 1000, 'million': 1000000
};

function parseInt(string) {

  const markers = {
    unit: {
      seen: false, index: null, multiplier: 1,
      next() { return markers.thousand; },
    },
    thousand: {
      seen: false, index: null, multiplier: corpus['thousand'],
      next() { return markers.million; },
    },
    million: {
      seen: false, index: null, multiplier: corpus['million'],
      next() { return null; }
    },
  };

  const arr = string.trim().split(/\s|-/);
  const tokens = [];

  // clean up arr of words into word tokens, 
  // i.e. keep the words we know and drop the ones we don't need
  for (const word of arr) {
    if (word in corpus) {
      tokens.push(word);
    }
  }

  const cleanTokens = [];
  for (const [i, word] of tokens.entries()) {

    // we will extract 'thousand' and 'million' as a "marker".
    // and we will push other corpus words into clean tokens.
    if (word in markers) {
      markers[word].seen = true;
      markers[word].index = cleanTokens.length;
    } else {
      cleanTokens.push(word);
    }

    // if the input string ends with 'thousand' or 'million',
    // that means we don't need to parse the 'unit' section
    if (i === tokens.length - 1) {
      if (!(word in markers)) {
        markers.unit.seen = true;
        markers.unit.index = cleanTokens.length;
      }
    }
  }

  function parseSection(arr) {
    const parseList = [];
    const idx = arr.indexOf('hundred')
    for (const [i, v] of arr.entries()) {
      if (idx === i) {
        parseList[parseList.length - 1] *= 100;
      } else {
        parseList.push(corpus[v]);
      }
    }
    return parseList.reduce((k, v) => k + v, 0);
  }

  let sum = 0;
  Object.keys(markers).forEach(marker => {
    if (markers[marker].seen) {
      const mNext = markers[marker].next();
      const startIdx = (mNext != null) ? mNext.index : 0;
      const endIdx = markers[marker].index;
      sum += parseSection(cleanTokens.slice(startIdx, endIdx)) * markers[marker].multiplier;
    }
  });
  return sum;
}

// log(parseInt('one'), 1);
// log(parseInt('twenty'), 20);
// log(parseInt('two hundred forty-six'), 246);
// log(parseInt('two thousand three hundred and forty-six'), 2346);
log(parseInt('one million'), 1000000);