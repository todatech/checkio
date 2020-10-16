#!/usr/bin/env checkio --domain=js run bird-language
"use strict";
// Stephan has a friend who happens to be a little mechbird.    Recently, he was trying to teach it how to speak basic language.    Today the bird spoke its first word: "hieeelalaooo".    This sounds a lot like "hello", but with too many vowels.    Stephan asked Nikola for help and he helped to examine how the bird changes words.    With the information they discovered, we should help them to make a translation module.
// 
// The bird converts words by two rules:
// - after each consonant letter the bird appends a random vowel letter (l ⇒ la or le);- after each vowel letter the bird appends two of the same letter (a ⇒ aaa);Vowels letters == "aeiouy".
// You are given an ornithological phrase as several words which are separated by white-spaces    (each pair of words by one whitespace).    The bird does not know how to punctuate its phrases and only speaks words as letters.    All words are given in lowercase.    You should translate this phrase from the bird language to something more understandable.
// 
// Input:A bird phrase as a string.
// 
// Output:The translation as a string.
// 
// Precondition:re.match("\A([a-z]+\ ?)+(?<!\ )\Z", phrase)
// A phrase always has the translation.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function translate(text) {
    var vowelsSearchStr = /([a]{3})|([e]{3})|([i]{3})|([o]{3})|([u]{3})|([y]{3})/;
    var consonantsSearchStr = /[^aeiouy\W][aeiouy]{1}/;
    var reVowels = new RegExp(vowelsSearchStr, 'ig');
    var reConsonants = new RegExp(consonantsSearchStr, 'ig');
    var t = text.slice();
    t = t.replace(reVowels, function (match) {
        return match.slice(0, 1);
    });
    // log(t);
    t = t.replace(reConsonants, function (match) {
        return match.slice(0, 1);
    });
    // log(t);
    return t;
}
console.log('Example:');
console.log(translate('hieeelalaooo'));
// These "asserts" are used for self-checking
if (true) {
    assert_1.default.equal(translate('hieeelalaooo'), 'hello');
    assert_1.default.equal(translate('hoooowe yyyooouuu duoooiiine'), 'how you doin');
    assert_1.default.equal(translate('aaa bo cy da eee fe'), 'a b c d e f');
    assert_1.default.equal(translate('sooooso aaaaaaaaa'), 'sos aaa');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
