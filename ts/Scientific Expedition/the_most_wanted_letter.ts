#!/usr/bin/env checkio --domain=js run the-most-wanted-letter

// You are given a text, which contains different english letters and punctuation symbols.    You should find the most frequent letter in the text. The letter returned must be in lower case.
// While checking for the most wanted letter, casing does not matter, so for the purpose of your search,    "A" == "a".    Make sure you do not count punctuation symbols, digits and whitespaces, only letters.
// 
// If you havetwo or more letters with the same frequency,    then return the letter which comes first in the latin alphabet.    For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".
// 
// Input:A text for analysis as a string.
// 
// Output:The most frequent letter in lower case as a string.
// 
// Precondition:
// A text contains only ASCII symbols.
// 0 < len(text) ≤ 105
// 
// 
// END_DESC

export { };
import assert from "assert";

const log = console.log;

function mostWanted(text: string): string {
  const letterList = text.slice().toLowerCase().split('');

  if (!letterList.length) { return '' };
  if (letterList.length === 1) { letterList[0] };

  const letterMappingObj = letterList.reduce((acc: { [key: string]: number }, val) => {
    acc.hasOwnProperty(val) ? acc[val] += 1 : acc[val] = 1
    return acc;
  }, {})

  const result = Object.entries(letterMappingObj)
    .filter((val) => {
      if ((val[0] >= 'a') && (val[0] <= 'z')) {
        return val;
      }
    })
    .sort((a, b) => {
      if (a[1] > b[1]) { return -1 }
      if (a[1] < b[1]) { return 1 }
      if (a[1] == b[1]) {
        if (a[0] > b[0]) { return 1 }
        if (a[0] == b[0]) { return 0 } //should not be this base
        if (a[0] < b[0]) { return -1 }
      }
      return 1;
    });

  // log(result);
  return result[0][0];
}

console.log('Example:');
console.log(mostWanted('Hello World!'));

if (true) {

  // These "asserts" are used for self-checking
  assert.equal(mostWanted('Hello World!'), 'l');
  assert.equal(mostWanted('How do you do?'), 'o');
  assert.equal(mostWanted('One'), 'e');
  assert.equal(mostWanted('Oops!'), 'o');
  assert.equal(mostWanted('AAaooo!!!!'), 'a');
  assert.equal(mostWanted('abe'), 'a');

  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}