#!/usr/bin/env checkio --domain=js run unix-match-part-1

// Sometimes you find yourself in a situation when, among a huge number of files on your computer or in a separate folder, you need to find files of a certain type. For example, images with the extension '.jpg' or documents with the extension '.txt', or even files that have the word 'butterfly' in their name. Doing this manually can be time-consuming. 'Matching' or patterns for searching files by a specific mask are just what you need for these sort of challenges.
// This mission will help you understand how this works.
// 
// You need to find out if the given unix pattern matches the given filename.
// 
// Let me show you what I mean by matching the filenames in the unix-shell. For example, * matches everything and *.txt matches all of the files that have txt extension. Here is a small table that shows symbols that can be used in patterns.
// 
// *matches everything?matches any single characterInput:Two arguments. Both are strings.
// 
// Output:Bool.
// 
// Precondition:0<len(strings)<100
// 
// 
// END_DESC

import assert from "assert";
const log = console.log;

function unixMatch(filename: string, pattern: string): any {

  let testPattern = pattern.replace(/[\*]+/g, '*');     //trim **** into *

  // Modify unix match to re match
  // we will test the pattern to see if search string can be substitued with regex.
  let reString = '';

  // 1a. test '*' 
  if (testPattern === '*') { reString = '(.+)'; }              //this will match filename with and without ext

  // 2. test if it contains. '*' and '?' and replace with suitable regex
  else {
    reString = testPattern.replace('.', '\\.{1}')
      .replace(/\*/g, "(.*)")
      .replace(/\?/g, '.')
  }
  // log('test pattern: ', testPattern);
  // log('reString: ', reString);

  const re = new RegExp(reString, 'i');
  // log(re);

  const fileMatch = filename.match(re)
  // log(fileMatch);

  return (fileMatch === null) ? false : (filename === fileMatch[0]);
}

console.log('Example:');
console.log(unixMatch('log1.txt', 'log?.txt'));

// These "asserts" are used for self-checking
assert.equal(unixMatch('somefile.txt', '*'), true);
assert.equal(unixMatch('other.exe', '**'), true);
assert.equal(unixMatch('my.exe', '*.txt'), false);
assert.equal(unixMatch('log1.txt', 'log?.txt'), true);
assert.equal(unixMatch('log12.txt', 'log?.txt'), false);
assert.equal(unixMatch('log12.txt', 'log??.txt'), true);
assert.equal(unixMatch('12apache1', '*.*'), false);
assert.equal(unixMatch('12apache1.log', '*.*'), true);
assert.equal(unixMatch('name....', 'name.*'), true);
assert.equal(unixMatch('file19.txt', '*z*'), false);


console.log("Coding complete? Click 'Check' to earn cool rewards!");


// -----------------------
// old notes not really working

// const re = '';
// matching filename
// const match = filename.match(/[^//]*\.(\w+)$/gi);  //this matches '*'
// const match = filename.match(/[^//]*\.(txt)$/gi);  //this matches '*.txt'
// const match = filename.match(/(log.)*\.(txt)/gi);  //this matches 'log?.txt'
// const match = filename.match(/(log..)*\.(txt)/gi);  //this matches 'log??.txt'

// disecting pattern
// const match = pattern.match(/\*/gi);  //this dissect '*'
// const match = pattern.match(/([\*])*\.([^\\]*)$/gi);  //this dissect '*'

// function test() {
//     let str = '<h1>Hello, world!</h1>';

//     let tag = str.match(/<(.*?)>/);

//     console.log('tag: ', tag);
//     console.log('tag0: ', tag[0]); // <h1>
//     console.log('tag1: ', tag[1]); // h1
// }

// function testurl () {
//     let str = 'http://www.test.com/dir/filename.jpg?var1=foo#bar';

//     let tag = str.match(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/);

//     console.log('tag: ', tag);
// }

// Version 1 old
// this regex will separate into 2 group of 4, [1-4] for file part, [5-8] for ext part
// [0] -> whole filename (or ext)
// [1][5]-> filename part with wildcard
// [2][6] -> matches '*' or '?'
// [3][7] -> start of the filename with no '?' wildcards
// [4][8] -> number of '?' wildcard in the string
//const re = /^(([\*\?]+)|(\w+)([\*\?]*)*)(?:\.)*(([\*\?]+)|(\w+)([\*\?]*)*)*$/i;

// Version 2 
// this regex will separate into 2 group of 3, [1-3] for file part, [4-6] for ext part
// [0] -> whole filename (or ext)
// [1][5]-> filename part with wildcard
// [2][6] -> matches '*' or '?'
// [3][7] -> start of the filename with no '?' wildcards
// [4][8] -> number of '?' wildcard in the string


// const re= /^(([\w]*)([\*\?]*))(?:\.)?(([\w]*)([\*\?]*))$/i;

// Version 3 not working
// ^(([\w]*)([\*]*|[\?]*))(?:\.)?(\1)$

// Version 4
// this regex will separate into 2 group of 3, [1-4] for file part, [5-8] for ext part
// [0] -> whole filename (or ext)
// [1][5]-> filename part with wildcard
// [2][6] -> if there is  '*' or '?' 
// [3][7] -> start of the filename with no '?' wildcards
// [4][8] -> if there is  '*' or '?' 
// Version 4 final
// const re = /^(([\*\?]*)?([\w]*)?([\*\?]*)?)?(?:[\.])?(([\*\?]*)?([\w]*)?([\*\?]*)?)?$/i


// function myTest() {

//   const testStr: string[] = [
//     'somefile.txt', '*',
//     'other.exe', '*',
//     'my.exe', '*.txt',
//     'log1.txt', 'log?.txt',
//     'log12.txt', 'log?.txt',
//     'log12.txt', 'log??.txt',
//     'log*.*', '*.*',
//   ];
//   const testStr2: string[] = [
//     '*',
//     '*.txt',
//     'log?.txt',
//     'log??.txt',
//     '*.*',
//   ];

//   for (const str of testStr2) {
//     console.log(unixMatch(str, ''));
//   }

//   return 'complete myTest()';
// }


// -------------------------