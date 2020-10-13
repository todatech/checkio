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

import assert from "assert";

function mostWanted(text: string): string {
    // your code here
    return 'a';
}

console.log('Example:');
console.log(mostWanted('Hello World!'));

// These "asserts" are used for self-checking
assert.equal(mostWanted('Hello World!'), 'l');
assert.equal(mostWanted('How do you do?'), 'o');
assert.equal(mostWanted('One'), 'e');
assert.equal(mostWanted('Oops!'), 'o');
assert.equal(mostWanted('AAaooo!!!!'), 'a');
assert.equal(mostWanted('abe'), 'a');

console.log("Coding complete? Click 'Check' to earn cool rewards!");