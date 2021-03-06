#!/usr/bin/env checkio --domain=js run caps-lock
"use strict";
// Joe Palooka has fat fingers, so he always hits the “Caps Lock” key whenever he actually intends to hit the key  “a” by itself. (When Joe tries to type in some accented version of “a” that needs more keystrokes to conjure the accents, he is more careful in the presence of such raffinated characters ([Shift] + [Char]) and will press the keys correctly.) Compute and return the result of having Joe type in the given text. The “Caps Lock” key affects only the letter keys from “a” to “z” , and has no effect on the other keys or characters. “Caps Lock” key is assumed to be initially off.
// 
// Input:A string. The typed text.
// 
// Output:A string. The showed text after being typed.
// 
// The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function capsLock(text) {
    var isCaplocked = false;
    //will use text as input string and push changes to output below
    var output = [];
    for (var i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            isCaplocked = !isCaplocked;
        }
        else {
            (isCaplocked) ? output.push(text[i].toUpperCase()) : output.push(text[i]);
        }
    }
    return output.join('');
}
console.log('Example:');
console.log(capsLock('Why are you asking me that?'));
if (true) {
    // These "asserts" are used for self-checking
    assert_1.default.equal(capsLock('Why are you asking me that?'), 'Why RE YOU sking me thT?');
    assert_1.default.equal(capsLock('Always wanted to visit Zambia.'), 'AlwYS Wnted to visit ZMBI.');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
