#!/usr/bin/env checkio --domain=js run common-words
"use strict";
// Let's continue examining words. You are given two string with words separated by commas.    Try to find what is common between these strings. The words are not repeated in the same string.
// 
// Your function should find all of the words that appear in both strings.    The result must be represented as a string of words separated by commas inalphabetic order.
// 
// Input:Two arguments as strings.
// 
// Output:The common words as a string.
// 
// Precondition:
// Each string contains no more than 10 words.
// All words separated by commas.
// All words consist of lowercase latin letters.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function commonWords(line1, line2) {
    var line1List = line1.slice().split(',');
    var line2List = line2.slice().split(',');
    return line1List.filter(function (val) { return line2List.includes(val); }).sort().join(',');
}
console.log('Example:');
console.log(commonWords('hello,world', 'hello,earth'));
if (true) {
    // These "asserts" are used for self-checking
    assert_1.default.equal(commonWords('hello,world', 'hello,earth'), 'hello');
    assert_1.default.equal(commonWords('one,two,three', 'four,five,six'), '');
    assert_1.default.equal(commonWords('one,two,three', 'four,five,one,two,six,three'), 'one,three,two');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
