#!/usr/bin/env checkio --domain=js run surjection-strings
"use strict";
// Maybe it's a cipher? Maybe, but we don’t know for sure.
// 
// Maybe you can call it"homomorphism"? i wish I know this word before.
// 
// You need to check that the 2 given strings are isometric. This means that a character from one string can become a match for characters from another string.
// 
// One character from one string can correspond only to one character from another string. Two or more characters of one string can correspond to one character of another string, but not vice versa.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function isometricStrings(line1, line2) {
    // if they are the same it's true
    if (line1 === '' && line2 === '') {
        return true;
    }
    if (line1.length !== line2.length) {
        return false;
    }
    if (line1.length < 3) {
        return false;
    }
    // construct mapper
    var mapper = {};
    for (var i = 0; i < line1.length; i++) {
        mapper[line1[i]] = line2[i];
    }
    // swapping key/value for reverse lookup
    var rlookup = {};
    for (var key in mapper) {
        rlookup[mapper[key]] = key;
    }
    //finding equity
    for (var i = 0; i < line1.length; i++) {
        if (line1[i] !== rlookup[line2[i]]) {
            return false;
        }
    }
    return true;
}
console.log('Example:');
console.log(isometricStrings('add', 'egg'));
// These "asserts" are used for self-checking
assert_1.default.equal(isometricStrings('add', 'egg'), true);
assert_1.default.equal(isometricStrings('foo', 'bar'), false);
assert_1.default.equal(isometricStrings('', ''), true);
assert_1.default.equal(isometricStrings('all', 'all'), true);
assert_1.default.equal(isometricStrings('gogopy', 'doodle'), false);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
