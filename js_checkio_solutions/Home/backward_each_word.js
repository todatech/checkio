#!/usr/bin/env checkio --domain=js run backward-each-word
"use strict";
// In a given string you should reverse every word, but the words should stay in their places.
// 
// Input:A string.
// 
// Output:A string.
// 
// Precondition:The line consists only from alphabetical symbols and spaces.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const assert = require('assert');
// function backwardStringByWord(text) {
var assert_1 = __importDefault(require("assert"));
function backwardStringByWord(text) {
    return text.split(' ').map(function (str) { return str.split('').reverse().join(''); }).join(' ');
}
console.log('Example:');
console.log(backwardStringByWord('hello    world'));
// These "asserts" are used for self-checking
assert_1.default.equal(backwardStringByWord(''), '');
assert_1.default.equal(backwardStringByWord('world'), 'dlrow');
assert_1.default.equal(backwardStringByWord('hello world'), 'olleh dlrow');
assert_1.default.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert_1.default.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
