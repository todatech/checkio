const Test.assertDeepEquals = console.Test.assertDeepEquals;
const assert = require('assert');

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

const getSet = str => Array.from(new Set(str.split(''))).sort();

function anagrams(word, words) {
  const src = getSet(word);
  return words.reduce((k, v) => {
    const dest = getSet(v);
    if (arraysEqual(src, dest)) k.push(v);
    return k;
  }, []);
}

Test.assertDeepEquals(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
Test.assertDeepEquals(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
Test.assertDeepEquals(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);