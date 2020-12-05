const log = console.log;
const assert = require('assert');

// function Interpreter()
// {
//     this.vars = {};
//     this.functions = {};
// }

// Interpreter.prototype.tokenize = function (program)
// {
//     if (program === "")
//         return [];

//     var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
//     return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
// };

// Interpreter.prototype.input = function (expr)
// {
//     var tokens = this.tokenize(expr);
// };

// Basic arithmetic
// Test.assertSimilar(interpreter.input("1 + 1"), 2);
// Test.assertSimilar(interpreter.input("2 - 1"), 1);
// Test.assertSimilar(interpreter.input("2 * 3"), 6);
// Test.assertSimilar(interpreter.input("8 / 4"), 2);
// Test.assertSimilar(interpreter.input("7 % 4"), 3);

// //Variables
// Test.assertSimilar(interpreter.input("x = 1"), 1);
// Test.assertSimilar(interpreter.input("x"), 1);
// Test.assertSimilar(interpreter.input("x + 3"), 4);
// Test.expectError(function() { interpreter.input("y"); });

// char test
const isOperator = (c) => /[\+\-\*\/\%\(\)\=]/.test(c);
const isDigit = (c) => /[0-9]/.test(c);
const isWhiteSpace = (c) => /\s/.test(c);
// const isIdentifier = (c) => (typeof c === 'string' && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c));
// const isIdentifier = (c) => ();
// const isIdentifierChar = (c) => 

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
    } else if (isIdentifier(c)) {
      let idn = c;
      while (!isWhiteSpace(next()) && !c) idn += c;
      addToken('identifier', idn);
    }
    else {
      throw 'Unrecongized token.';
    }
  }

  addToken('done');
  return tokens;
}

class SymRoot {
  constructor() {
    this.symbolTable = {};
  }

  nud() {
    this.error('Undefined.');
  }

  led(left) {
    this.error('Missing Operator.');
  }


}

class Sym extends SymRoot {
  constructor() {
    super();
    // this.symbol(id, bp);
  }

  symbol(id, bp) {
    let s = this.symbolTable[id];
    bp = bp || 0;
    if (s) {
      if (bp >= s.bp) {
        s.lbp = bp;
      }
    } else {
      s = Object.create(Sym);
      s.id = s.value = id;
      s.lbp = bp;
      this.symbolTable[id] = s;
    }
    return s;
  }
}


function parse(tokens) {
  const parseTree = [];

  let i = 0;
  function getToken() {
    return interpretToken(tokens[i]);
  }

  function next() {

  }
  return parseTree;
}


const calc = function (expression) {

  // const sym = new Sym();

  // sym.symbol(')');
  // sym.symbol('end');

  // log(sym);

  const tokens = lex(expression);
  log('tokens: ', tokens);
  // const tree = parse(tokens);
  // log('tree: ', tree);

}

// tests = [

// ];


tests = [
  ['1 + 1', 2],
  ['2 - 1', 1],
  ['2 * 3', 6],
  ['8 / 4', 2],
  ['7 % 4', 3],

  ['x = 1', 1],
  ['x_asdfasd', 1],
  ['x + 3', 4],
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],  
]
// Basic arithmetic
// Test.assertSimilar(interpreter.input("1 + 1"), 2);
// Test.assertSimilar(interpreter.input("2 - 1"), 1);
// Test.assertSimilar(interpreter.input("2 * 3"), 6);
// Test.assertSimilar(interpreter.input("8 / 4"), 2);
// Test.assertSimilar(interpreter.input("7 % 4"), 3);

// //Variables
// Test.assertSimilar(interpreter.input("x = 1"), 1);
// Test.assertSimilar(interpreter.input("x"), 1);
// Test.assertSimilar(interpreter.input("x + 3"), 4);
// Test.expectError(function() { interpreter.input("y"); });


tests.forEach(function (m) {
  calc(m[0]);
  // log(calc(m[0]), m[1]);
});