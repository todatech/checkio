#!/usr/bin/env checkio --domain=js run verify-anagrams
"use strict";
// An anagram is a type of word play,    the result of rearranging the letters of a word or phrase to produce a new word or phrase,    using all the original letters exactly once.    Two words are anagrams to each other if we can get one from another by rearranging the letters.    Anagrams are case-insensitive and don't take account whitespaces.    For example: "Gram Ring Mop" and "Programming" are anagrams. But "Hello" and "Ole Oh" are not.
// 
// You are given two words or phrase. Try to verify are they anagrams or not.
// 
// Input:Two arguments as strings.
// 
// Output:Are they anagrams or not as boolean (True or False)
// 
// Precondition:0<|first_word|<100;
// 0<|second_word|<100;
// Words contain only ASCII latin letters and whitespaces.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function verifyAnagrams(line1, line2) {
    var line1List = line1.toLowerCase().replace(/\s/g, '').split('');
    var line2List = line2.toLowerCase().replace(/\s/g, '').split('');
    // console.log(line1List, ' ', line2List);
    for (var i = 0; i < line1List.length; i++) {
        var charToFind = line1List[i];
        var idx = line2List.indexOf(charToFind);
        if (idx === -1) {
            return false;
        }
        line1List.splice(i, 1);
        line2List.splice(idx, 1);
        i--;
    }
    if ((line1List.length === 0) && (line2List.length === 0)) {
        return true;
    }
    return false;
}
console.log('Example:');
console.log(verifyAnagrams('Programming', 'Gram Ring Mop'));
// These "asserts" are used for self-checking
assert_1.default.equal(verifyAnagrams('Programming', 'Gram Ring Mop'), true);
assert_1.default.equal(verifyAnagrams('Hello', 'Ole Oh'), false);
assert_1.default.equal(verifyAnagrams('Kyoto', 'Tokyo'), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
