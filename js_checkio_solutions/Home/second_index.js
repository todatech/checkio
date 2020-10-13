#!/usr/bin/env checkio --domain=js run second-index
"use strict";
// You are given two strings and you have to find an index of the second occurrence of the second string in the first one.
// 
// Let's go through the first example where you need to find the second occurrence of "s" in a word "sims". It’s easy to find its first occurrence with a functionindexOfwhich will point out that "s" is the first symbol in a word "sims" and therefore the index of the first occurrence is 0. But we have to find the second "s" which is 4th in a row and that means that the index of the second occurrence (and the answer to a question) is 3.
// 
// Input:Two strings.
// 
// Output:Int or undefined
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function secondIndex(text, symbol) {
    var answer = -1;
    for (var i = 0; i < 2; i++) {
        answer++;
        answer = text.indexOf(symbol, answer);
        if (answer === -1)
            return undefined;
    }
    return answer;
}
console.log('Example');
console.log(secondIndex("sims", "s"));
// These "asserts" are used for self-checking and not for an auto-testing
assert_1.default.equal(secondIndex("sims", "s"), 3);
assert_1.default.equal(secondIndex("find the river", "e"), 12);
assert_1.default.equal(secondIndex("hi", " "), undefined);
assert_1.default.equal(secondIndex("hi mayor", " "), undefined);
assert_1.default.equal(secondIndex("hi mr Mayor", " "), 5);
console.log("You are awesome! All tests are done! Go Check it!");
