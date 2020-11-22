const log = console.log;
const assert = require('assert');

// char test
const isOperator = (c) => /[\+\-\*\/\%\(\)]/.test(c);
const isDigit = (c) => /[0-9]/.test(c);
const isWhiteSpace = (c) => /\s/.test(c);

// Lexer
const lex = function (input) {

  let tokens = [];
  let i = 0;
  let c;

  if (!input.length)
    return tokens;
  else
    c = input[i];

  function next() {
    return c = input[++i];
  }

  function addToken(type, input) {
    tokens.push({
      type,
      input,
    });
  }

  while (i < input.length) {

    if (isWhiteSpace(c)) {
      next();
    } else if (isOperator(c)) {
      addToken(c);
      next();
    } else if (isDigit(c)) {
      let num = c;
      while (isDigit(next())) num += c;
      if (c === '.') {
        do num += c; while (isDigit(next()));
      }
      num = parseFloat(num);
      if (!isFinite(num)) throw 'Number is too large';
      addToken('number', num);
    }
    else {
      throw 'Unrecongized token.';
    }
  }

  addToken('done');
  return tokens;
}

function parse(tokens) {
  const parseTree = [];

  let i = 0;
  function getToken() {
    return interpretToken(tokens[i]);
  }
  function next () {

  }


  return parseTree;
}


const calc = function (expression) {

  const tokens = lex(expression);
  log('tokens: ', tokens);
  const tree = parse(tokens);
  log ('tree: ', tree);
}

tests = [
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],
];

tests.forEach(function (m) {
  calc(m[0]);
  // log(calc(m[0]), m[1]);
});