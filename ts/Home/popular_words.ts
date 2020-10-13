#!/usr/bin/env checkio --domain=js run popular-words

// In this mission your task is to determine the popularity of certain words in the text.
// 
// At the input of your function are given 2 arguments: the text and the array of words the popularity of which you need to determine.
// 
// When solving this task pay attention to the following points:
// 
// The words should be sought in all registers. This means that if you need to find a word "one" then words like "one", "One", "oNe", "ONE" etc. will do.The search words are always indicated in the lowercase.If the word wasn’t found even once, it has to be returned in the dictionary with  0 (zero) value.Input:The text and the search words array.
// 
// Output:The dictionary where the search words are the keys and values are the number of times when those words are occurring in a given text.
// 
// Precondition:
// The input text will consists of English letters in uppercase and lowercase and whitespaces.
// 
// 
// END_DESC

export { }
// import assert from 'assert';

interface IPopWords { [key: string]: number }

function popularWords(text: string, words: string[]) {

	const popWords: IPopWords = text.toLowerCase().split(/[\n\s]+/)
		.reduce((acc: IPopWords, val: string, idx: number) => {
			(acc.hasOwnProperty(val) ? acc[val] += 1 : acc[val] = 1);
			return acc;
		}, {})

	return words.reduce((acc: IPopWords, val: string) => {
		acc[val] = (popWords[val] ?? 0);
		return acc;
	}, {});
	// let result: IPopWords = {};
	// for (let key of words) {
	// 	result[key] = (popWords[key] ?? 0);
	// }

	// return result;

}


console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))