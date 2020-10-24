#!/usr/bin/env checkio --domain=js run pangram

// A pangram (Greek:παν γράμμα, pan gramma, "every letter") or holoalphabetic sentence for a given alphabet is a    sentence using every letter of the alphabet at least once. Perhaps you are familiar with the well known pangram "The    quick brown fox jumps over the lazy dog".
// 
// For this mission, we will use the latin alphabet (A-Z). You are given a text with latin letters and punctuation    symbols. You need to check if the sentence is a pangram or not. Case does not matter.
// 
// Input:A text as a string.
// 
// Output:Whether the sentence is a pangram or not as a boolean.
// 
// Precondition:
// 
// All ASCII English Letter(a-z,A-Z) and punctuations such as:!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~
// END_DESC

const assert = require('assert')
const log = console.log;

function isPangram(string) {
  const pangramMap = string.toLowerCase().split('')
    .reduce((acc, val) => {
      if ((val >= 'a') && (val <= 'z')) {
        (acc.hasOwnProperty(val) ? acc[val] += 1 : acc[val] = 1);
      }
      return acc;
    }, {})
  return Object.entries(pangramMap).filter(val => val[1] >= 1).length === 26;
}


// let pangramMap: { [key: string]: number } = {};
// text.slice().toLowerCase().split('').forEach(val => {
//   if ((val >= 'a') && (val <= 'z')) {
//     (pangramMap.hasOwnProperty(val) ? pangramMap[val] += 1 : pangramMap[val] = 1);
//   }
// });
// // log(pangramMap);

// for (let i = 0; i < 26; i++) {
//   let char = (i + 10).toString(36);
//   if (!(pangramMap.hasOwnProperty(char) && (pangramMap[char] >= 1))) {
//     return false;
//   }
// }
// return true;


console.log('Example:');
console.log(isPangram(('The quick brown fox jumps over the '
  + 'lazy dog.')));

if (true) {

  // These "asserts" are used for self-checking
  assert.equal(isPangram(('The quick brown fox jumps over the '
    + 'lazy dog.')), true);
  assert.equal(isPangram('ABCDEF'), false);
  assert.equal(isPangram('abcdefghijklmnopqrstuvwxyz'), true);
  assert.equal(isPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), true);
  assert.equal(isPangram('abcdefghijklmnopqrstuvwxy'), false);
  assert.equal(isPangram(('Bored? Craving a pub quiz fix? Why, '
    + 'just come to the Royal Oak!')), true);
  assert.equal(isPangram(("As quirky joke, chefs won't pay "
    + 'devil magic zebra tax.')), true);
  assert.equal(isPangram(('Six big devils from Japan quickly '
    + 'forgot how to walt.')), false);

  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}