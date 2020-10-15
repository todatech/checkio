#!/usr/bin/env checkio --domain=js run unix-match-part-2
"use strict";
// Sometimes you find yourself in a situation when, among a huge number of files on your computer or in a separate folder, you need to find files of a certain type. For example, images with the extension '.jpg' or documents with the extension '.txt', or even files that have the word 'butterfly' in their name. Doing this manually can be time-consuming. 'Matching' or patterns for searching files by a specific mask are just what you need for these sort of challenges.
// This mission will help you understand how this works.
// 
// You need to find out if the given unix pattern matches the given filename.
// 
// Here is a small table that shows symbols that can be used in patterns.
// 
// [seq]matches any character in seq, for example [123] means any character - '1', '2' or '3'[!seq]matches any character not in seq, for example [!123] means any character except '1', '2' and '3'Note that the expression in one pair of square brackets responds onlyfor 1 character. So ('0123', '[!abc]123') == True, but ('00123', '[!abc]123') = False
// 
// Input:Two arguments. Both are strings.
// 
// Output:Bool.
// 
// Precondition:0<len(strings)<100
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function unixMatch(filename, pattern) {
    var reString = pattern;
    // // cannot match '!]' pattern because this is needed 
    reString = reString.replace(/(\!)([^\]])/gi, '^$2');
    // if there is [!] in the search string it is part of the filename
    // // if you find '[' at the beginning you add '\['
    reString = reString.replace('[!]', '\\[\!\\]');
    var re = new RegExp(reString, 'i');
    log(re);
    var fileMatch = filename.match(re);
    log(fileMatch);
    return (fileMatch !== null) ? (filename === fileMatch[0]) : false;
}
console.log('Example:');
console.log(unixMatch('log1.txt', 'log[1234567890].txt'));
// These "asserts" are used for self-checking
assert_1.default.equal(unixMatch('log1.txt', 'log[1234567890].txt'), true);
assert_1.default.equal(unixMatch('log1.txt', 'log[!1].txt'), false);
assert_1.default.equal(unixMatch('name.exe', 'name.[!.][!.][!.]'), true);
assert_1.default.equal(unixMatch('[!]check.txt', '[!]check.txt'), true);
assert_1.default.equal(unixMatch('1name.txt', '[!abc]name.txt'), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
