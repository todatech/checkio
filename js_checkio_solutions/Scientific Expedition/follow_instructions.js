#!/usr/bin/env checkio --domain=js run follow-instructions
"use strict";
// You’ve received a letter from a friend whom you haven't seen or heard from for a while. In this letter he gives you instructions on how to find a hidden treasure.
// 
// In this mission you should follow a given list of instructions which will get you to a certain point on the map. A list of instructions is a string, each letter of this string points you in the direction of your next step.
// 
// The letter "f" - tells you to move forward, "b" - backward, "l" - left, and "r" - right.
// 
// It means that if the list of your instructions is "fflff" then you should move forward two times, make one step to the left and then again move two times forward.
// 
// Now, let's imagine that you are in the position (0,0). If you move forward your position will change to (0, 1). If you move again it will be (0, 2). If your next step is to the left then your position will become (-1, 2). After the next two steps forward your coordinates will be (-1, 4)
// 
// Your goal is to find your final coordinates. Like in our case they are (-1, 4)
// 
// Input:A string.
// 
// Output:An array of two ints
// 
// Precondition:only chars f,b,l and r are allowed
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function follow(instructions) {
    var direction = {
        f: [0, 1],
        b: [0, -1],
        l: [-1, 0],
        r: [1, 0],
    };
    var currentPos = [0, 0];
    for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
        var step = instructions_1[_i];
        currentPos[0] += direction[step][0];
        currentPos[1] += direction[step][1];
    }
    return currentPos;
}
console.log('Example:');
console.log(follow('fflff'));
// These "asserts" are used for self-checking
if (true) {
    assert_1.default.deepEqual(follow('fflff'), [-1, 4]);
    assert_1.default.deepEqual(follow('ffrff'), [1, 4]);
    assert_1.default.deepEqual(follow('fblr'), [0, 0]);
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
