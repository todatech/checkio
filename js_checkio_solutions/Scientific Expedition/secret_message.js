#!/usr/bin/env checkio --domain=js run secret-message
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
// 1st solution --- too long  :(
// function findMessage(message: string): string {
//   return message.slice().split('').reduce((acc: string, val: string): string => {
//     const capLetter = val.toUpperCase();
//     if (val === capLetter) {
//       if (capLetter >= 'A' && capLetter <= 'Z') {
//         acc += capLetter;
//       }
//     }
//     return acc;
//   }, '')
// }
// 2nd solution, super concise, yeah!
function findMessage(message) {
    var matches = message.match(/([A-Z])/g);
    return ((matches) ? matches.join('') : '');
}
console.log('Example:');
console.log(findMessage(('How are you? Eh, ok. Low or Lower? '
    + 'Ohhh.')));
// These "asserts" are used for self-checking
if (true) {
    assert_1.default.equal(findMessage(('How are you? Eh, ok. Low or Lower? '
        + 'Ohhh.')), 'HELLO');
    assert_1.default.equal(findMessage('hello world!'), '');
    assert_1.default.equal(findMessage('HELLO WORLD!!!'), 'HELLOWORLD');
    assert_1.default.equal(findMessage('dnwkldhiqw3ry37xhqdxaifiuoa7eya8w6r87a7y87y & Y &* DS &* DYH *& d8w9y8whd7 *& Whdukjldwj * HDJKj'), 'YDSDYHWHDJK');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
