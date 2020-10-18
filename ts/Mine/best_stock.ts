#!/usr/bin/env checkio --domain=js run best-stock

// You are given the current stock prices. You have to find out which stocks cost more.
// 
// Input:The dictionary where the market identifier code is a key and the value is a stock price.
// 
// Output:The market identifier code (ticker symbol) as a string.
// 
// Preconditions:All the prices are unique.
// 
// 
// END_DESC

export { };
import assert from "assert";

const log = console.log;

function bestStock(data: Object): string {

  const result = Object.entries(data).reduce((acc, val) => {
    (val[1] > acc[1]) ? acc = [...val] : 0;
    return acc;
  }, ['', 0]);

  return result[0];
}

console.log('Example:');
console.log(bestStock({
  'ATX': 390.2,
  'CAC': 10.0,
  'WIG': 1.2
}));

if (true) {
  // These "asserts" are used for self-checking
  assert.equal(bestStock({
    'ATX': 390.2,
    'CAC': 10.0,
    'WIG': 1.2
  }), 'ATX');
  assert.equal(bestStock({
    'ATX': 1.01,
    'CAC': 91.1,
    'TASI': 120.9
  }), 'TASI');

  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}