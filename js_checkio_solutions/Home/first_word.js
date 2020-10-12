#!/usr/bin/env checkio --domain=js run first-word
"use strict";
// You are given a string where you have to find its first word.
// 
// When solving a task pay attention to the following points:
// 
// There can be dots and commas in a string.A string can start with a letter or, for example, a dot or space.A word can contain an apostrophe and it's a part of a word.The whole text can be represented with one word and that's it.Input:A string.
// 
// Output:A string.
// 
// Precondition:the text can contain a-z A-Z , . '
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
var assert_1 = __importDefault(require("assert"));
function firstWord(text) {
    var wordList = text.split(/[\s.]+/).reduce(function (acc, str) {
        if ((str !== '') && (str !== '...')) {
            acc.push(str);
        }
        return acc;
    }, []);
    var theFirstWord = wordList[0];
    if ((theFirstWord[theFirstWord.length - 1] === '.') ||
        (theFirstWord[theFirstWord.length - 1] === ','))
        theFirstWord = theFirstWord.slice(0, theFirstWord.length - 1);
    return theFirstWord;
}
console.log('Example:');
console.log(firstWord("greetings, friend"));
// These "asserts" using for self-checking and not for auto-testing
assert_1.default.equal(firstWord("Hello world"), "Hello");
assert_1.default.equal(firstWord(" a word "), "a");
assert_1.default.equal(firstWord("don't touch it"), "don't");
assert_1.default.equal(firstWord("greetings, friends"), "greetings");
assert_1.default.equal(firstWord("... and so on ..."), "and");
assert_1.default.equal(firstWord("hi"), "hi");
console.log("Coding complete? Click 'Check' to earn cool rewards!");
