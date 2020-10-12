#!/usr/bin/env checkio --domain=js run first-word-simplified

// You are given a string where you have to find its first word.
//
// This is a simplified version of theFirst Wordmission.
//
// Input string consists of only english letters and spaces.There aren’t any spaces at the beginning and the end of the string.Input:A string.
//
// Output:A string.
//
// Precondition:Text can contain a-z, A-Z and spaces.
//
//
// END_DESC

// import assert from "assert";
const assert = require("assert").strict;

function firstWord(text) {
  return text.split(" ")[0];
}

console.log("Example:");
console.log(firstWord("Hello world"));

// These "asserts" are used for self-checking
assert.equal(firstWord("Hello world"), "Hello");
assert.equal(firstWord("a word"), "a");
assert.equal(firstWord("hi"), "hi");

console.log("Coding complete? Click 'Check' to earn cool rewards!");
