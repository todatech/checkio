#!/usr/bin/env checkio --domain=js run the-most-wanted-letter
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function mostWanted(text) {
    var letterList = text.slice().toLowerCase().split('');
    if (!letterList.length) {
        return '';
    }
    ;
    if (letterList.length === 1) {
        letterList[0];
    }
    ;
    var letterMappingObj = letterList.reduce(function (acc, val) {
        acc.hasOwnProperty(val) ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {});
    var result = Object.entries(letterMappingObj)
        .filter(function (val) {
        if ((val[0] >= 'a') && (val[0] <= 'z')) {
            return val;
        }
    })
        .sort(function (a, b) {
        if (a[1] > b[1]) {
            return -1;
        }
        if (a[1] < b[1]) {
            return 1;
        }
        if (a[1] == b[1]) {
            if (a[0] > b[0]) {
                return 1;
            }
            if (a[0] == b[0]) {
                return 0;
            } //should not be this base
            if (a[0] < b[0]) {
                return -1;
            }
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
    assert_1.default.equal(mostWanted('Hello World!'), 'l');
    assert_1.default.equal(mostWanted('How do you do?'), 'o');
    assert_1.default.equal(mostWanted('One'), 'e');
    assert_1.default.equal(mostWanted('Oops!'), 'o');
    assert_1.default.equal(mostWanted('AAaooo!!!!'), 'a');
    assert_1.default.equal(mostWanted('abe'), 'a');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
