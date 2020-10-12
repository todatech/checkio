#!/usr/bin/env checkio --domain=js run first-word-simplified
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// const assert = require("assert").strict;
// function firstWord(text: string): string {
//   return text.split(" ")[0];
// }
var firstWord = function (text) { return text.split(" ")[0]; };
console.log("Example:");
console.log(firstWord("Hello world"));
// These "asserts" are used for self-checking
assert_1.default.equal(firstWord("Hello world"), "Hello");
assert_1.default.equal(firstWord("a word"), "a");
assert_1.default.equal(firstWord("hi"), "hi");
console.log("Coding complete? Click 'Check' to earn cool rewards!");
