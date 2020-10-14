#!/usr/bin/env checkio --domain=js run words-order
"use strict";
// You have a text and a list of words. You need to check if the words in a list appear in the same order as in the given text.
// 
// Cases you should expect while solving this challenge:
// 
// a word from the list is not in the text - your function should return False;any word can appear more than once in a text - use only the first one;two words in the given list are the same - your function should return False;the condition is case sensitive, which means 'hi' and 'Hi' are two different words;the text includes only English letters and spaces.Input:Two arguments. The first one is a given text, the second is a list of words.
// 
// Output:A bool.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function wordsOrder(text, words) {
    // if words array has nothing, we will exit
    if (Array.isArray(words) && !words.length) {
        return false;
    }
    var listOfWords = text.split(' ');
    var result = [];
    var _loop_1 = function (word) {
        var idx = listOfWords.findIndex(function (text) { return text === word; });
        if (idx === -1) {
            return { value: false };
        }
        result.push([word, idx]);
    };
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var state_1 = _loop_1(word);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    ;
    if (result.length === 1) {
        return true;
    }
    var testElem = result[0][1];
    for (var i = 1; i < result.length; i++) {
        var currentElement = result[i][1];
        if (currentElement <= testElem) {
            return false;
        }
        testElem = currentElement;
    }
    return true;
}
console.log('Example:');
console.log(wordsOrder('hi world im here', ['world', 'here']));
// These "asserts" are used for self-checking
assert_1.default.equal(wordsOrder('hi world im here', ['world', 'here']), true);
assert_1.default.equal(wordsOrder('hi world im here', ['here', 'world']), false);
assert_1.default.equal(wordsOrder('hi world im here', ['world']), true);
assert_1.default.equal(wordsOrder('hi world im here', ['world', 'here', 'hi']), false);
assert_1.default.equal(wordsOrder('hi world im here', ['world', 'im', 'here']), true);
assert_1.default.equal(wordsOrder('hi world im here', ['world', 'hi', 'here']), false);
assert_1.default.equal(wordsOrder('hi world im here', ['world', 'world']), false);
assert_1.default.equal(wordsOrder('hi world im here', ['country', 'world']), false);
assert_1.default.equal(wordsOrder('hi world im here', ['wo', 'rld']), false);
assert_1.default.equal(wordsOrder('', ['world', 'here']), false);
assert_1.default.equal(wordsOrder('hi world world im here', ['world', 'world']), false);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
