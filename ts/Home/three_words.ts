#!/usr/bin/env checkio --domain=js run three-words

// Let's teach the Robots to distinguish words and numbers.
// 
// You are given a string with words and numbers separated by whitespaces (one space).    The words contains only letters.    You should check if the string contains three words insuccession.    For example, the string "start 5one two three7 end" contains three words in succession.
// 
// Input:A string with words.
// 
// Output:The answer as a boolean.
// 
// Precondition:The input contains words and/or numbers. There are no mixed words (letters and digits combined).
// 0 < len(words) < 100
// 
// 
// END_DESC

import assert from "assert";

function threeWords(text: string): boolean {
  let answerList = text.split(' ').reduce((acc, str) => {
    if (Number.isNaN(+str)) {
      acc.push( (acc.pop() ?? 0) + 1);
    } else {
      acc.push(0)
    }
    return acc;
  }, [0]);
  return (answerList.find((val) => val >= 3) !== undefined) ? true : false;
}

console.log('Example:')
console.log(threeWords("Hello World hello"))

assert.equal(threeWords("Hello World hello"), true);
assert.equal(threeWords("He is 123 man"), false);
assert.equal(threeWords("1 2 3 4"), false);
assert.equal(threeWords("bla bla bla bla"), true);
assert.equal(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");