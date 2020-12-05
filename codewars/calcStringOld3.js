const { type } = require("os");

// Grammar
// expression      ::= factor | expression operator expression
// factor          ::= number | identifier | assignment | '(' expression ')'
// assignment      ::= identifier '=' expression

// operator        ::= '+' | '-' | '*' | '/' | '%'

// identifier      ::= letter | '_' { identifier-char }
// identifier-char ::= '_' | letter | digit

// number          ::= { digit } [ '.' digit { digit } ]

// letter          ::= 'a' | 'b' | ... | 'y' | 'z' | 'A' | 'B' | ... | 'Y' | 'Z'
// digit           ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

// for this exercise production rules maybe
// expression -> number(operator number)*
// remember * --> 0+ match, + -> 1+ match, ? 0 or 1 match (optional);

// for addition 1 + 1
// expression -> number(('+'|'-')number)*

// for conditions x > 10 and y > 30
// expression -> condition('and'?condition)*
// condition -> variable(operator)number

// to handle precedence i.e. *,/ and then +,-
// expression -> term(('+'|'-')term)*
// term -> number(('*'|'/')number)*

// modify the above to fit parenthesized i.e. (2+3)*5
// expression -> term(('+'|'-')term)*
// term -> factor(('*'|'/')factor)*
// factor -> '('expression')'|number

// you should arrange your rules so that operators with the lowest precedence are at the top,
// while the ones with highest precedence are at the bottom.


const log = console.log;

const reOperators = '[-+*\\/\\%=\\(\\)]';
const reIdentifier = '[A-Za-z_][A-Za-z0-9_]*';
const reNumbers = '[0-9]*\\.?[0-9]+'
// const reAssignment = '[=]';
// const reScope = '[\\(\\)]';

const isOperators = c => RegExp(reOperators, 'g').test(c);
const isIdentifier = c => RegExp(reIdentifier, 'g').test(c);
const isNumbers = c => RegExp(reNumbers, 'g').test(c);
const isLeftParenthesis = c => /\(/.test(c);
const isRightParenthesis = c => /\)/.test(c);
const isEqualSign = c => /\=/.test(c);

// const isAssignment = c => RegExp(reAssignment, 'g').test(c);
// const isScope = c => RegExp(reScope, 'g').test(c);
// const isItem = c => (isNumbers(c) || isIdentifier(c))

const Num = Symbol('num');
const Op = Symbol('op');
const Idn = Symbol('idn');
// const Asg = Symbol('asg');
// const Scp = Symbol('scp')

const symbol = {
  '%': {
    prec: 3,
    assoc: 'left',
  },
  '*': {
    prec: 3,
    assoc: 'left',
  },
  '/': {
    prec: 3,
    assoc: 'left',
  },
  '+': {
    prec: 2,
    assoc: 'left',
  },
  '-': {
    prec: 2,
    assoc: 'left',
  },
}

function Interpreter() {
  this.symbols = {};
  this.c = 0;
  this.tokens = [];
  this.parseTree;
  this.outQueue = [];
  this.opStack = [];

  this.peek = () => this.tokens[this.c];
  this.peekAhead = () => this.token[this.c + 1];
  this.consume = () => this.tokens[this.c++];

  this.parseNum = () => ({
    value: parseFloat(this.consume()),
    type: Num
  })

  this.parseOp = () => ({
    value: this.consume(),
    type: Op
  })

  // {
  //   const node = { value: this.consume(), type: Op, expr: [] };
  //   while (this.peek()) node.expr.push(this.parseExpr());
  //   return node;
  // }

  // this.parseIdn = () => {

  //   let sym = this.consume()    
  //   this.symbols[sym] = 0;

  //   return {
  //     value: sym,
  //     type: Idn,
  //   };
  // }

  // this.parseFactor = () => ({
  //   value: this.consume(),
  //   type: Scp,
  // })

  // this.parseAssignment = () => ({
  //   value: this.consume(),
  //   type: Asg,
  // })

  this.parseExpr = () => {
    let token = this.peek();

  }


  // Version 2
  // let lObj, op, rObj;
  // if (isNumbers(token)) {
  //   lObj = this.parseNum();
  //   op = this.parseOp();
  //   rObj = this.parseNum();
  // }
  // log ("l o r: ", lObj, op, rObj);
  // return {lObj, op, rObj};

  // Version 1
  // if (isIdentifier(token)) {
  //   obj = this.parseIdn();
  // }
  // else if (isOperators(token)) {
  //   if (isAssignment(token)) {
  //     obj = this.parseAssignment();
  //   } else if (isScope(token)) {
  //     obj = this.parseFactor();
  //   } else {
  //     obj = this.parseOp();
  //   }
  // } 
  // else if (isNumbers(token)) {
  //   obj = this.parseNum();
  // }

  this.tokenize = (program) => {

    log('program: ', program);

    if (program === "")
      return [];

    const reStr = `\\s*(${reOperators}|${reIdentifier}|${reNumbers})\\s*`
    const regex = new RegExp(reStr, 'g');

    // this.tokens = program.split(regex).filter(s => !s.match(/^\s*$/));
    this.tokens = program.split(regex).map(s => s.trim()).filter(s => s.length);
    log(this.tokens);
    this.parse();
  }

  this.parse = () => {
    this.c = 0;
    this.parseTree = [];

    this.parseTree.push(this.parseExpr());
    // while (this.c < this.tokens.length) {
    // }
    log(this.parseTree);
    log(JSON.stringify(this.parseTree, null, 2));
  }

  // this.parse2 = () => {
  //   this.c = 0;

  //   while (this.c < this.parseTree.length){

  //   }
  // }

}


// Interpreter.prototype.createSymbol = function (id, nud, lbp, led) {
//   const sym = this.symbols[id] || {};
//   this.symbols[id] = {
//     lbp: sym.lbp || lbp,
//     nud: sym.nud || nud,
//     led: sym.led || led
//   }
// }
// Interpreter.prototype.infix = function (id, lbp, rbp, led) {
//   rbp = rbp || lbp;
//   this.createSymbol(id, null, lbp, led || function (left) {
//     return {
//       type: id,
//       left: left,
//       right: this.expression(rbp)
//     };
//   });
// }

// Interpreter.prototype.prefix = function (id, rbp) {
//   this.createSymbol(id, function (context) {
//     return {
//       type: id,
//       right: context.expression(rbp)
//     }
//   })
// }

// Interpreter.prototype.expression = function (rbp) {
//   let left;
//   let t = this.getToken();
//   this.nextToken();
//   t.nud.bind(this);

//   left = t.nud(t);
//   while (rbp < this.getToken().lbp){
//     t = this.getToken();
//     this.nextToken();
//     t.led.bind(this);
//     left = t.led(left);
//   }
//   return left;
// }

// Interpreter.prototype.getToken = function () {
//   return this.interpretToken(this.tokens[this.counter]);
// }

// Interpreter.prototype.nextToken = function () {
//   this.counter++;
//   return this.interpretToken(this.tokens[this.counter]);
// }

// Interpreter.prototype.interpretToken = function (token) {
//   const sym = Object.assign({},this.symbols[token.type]);
//   sym.type = token.type;
//   sym.value = token.value;
//   return sym;
// }



// Interpreter.prototype.parse = function () {
//   const parseTree = [];

//   while(this.getToken().type !== 'end') {
//     parseTree.push(this.expression(0));
//     parseTree.push()
//   }
//   // this.tokens.forEach(token => parseTree.push(this.interpretToken(token)))

//   return parseTree;
// }

Interpreter.prototype.input = function (expr) {
  this.tokens = this.tokenize(expr);
  // log(this.tokens);
  // this.prefix('-', 7);
  // this.infix('*', 4);
  // this.infix('/', 4);
  // this.infix('%', 4);
  // this.infix('+', 3);
  // this.infix('-', 3);

  // this.createSymbol('end');

  // this.createSymbol('numbers', function(number) {
  //   return number;
  // });

  // this.createSymbol('literals', function(name) {
  //   return name;
  // });

  // this.infix('=', 1,2, function (left) {
  //   if (left.type === 'literals') {
  //     return {
  //       type: 'assign',
  //       name: left.value,
  //       value: this.expression(2)
  //     };
  //   }
  //   return left; 
  // });

  // var parseTree = this.parse();
  // log(parseTree);
};

var interpreter = new Interpreter();

// Basic arithmetic
log(interpreter.input("1 + 1"), 2);
log(interpreter.input("2+2"), 4);
log(interpreter.input("2 - 1"), 1);
log(interpreter.input("2 * 3"), 6);
log(interpreter.input("8 / 4"), 2);
log(interpreter.input("7 % 4"), 3);

// log(interpreter.input("4-6"), -2);
// log(interpreter.input("4 + 2 * 3"), 10);
// log(interpreter.input("4 / 2 * 3"), 6);
// log(interpreter.input("7 % 2 * 8"), 8);
// log(interpreter.input("(4 + 2) * 3"), 18);
// log(interpreter.input("(7 + 3) / (2 * 2 + 1)"), 2);
// log(interpreter.input("(10 / (8 - (4 + 2))) * 3"), 15);

// //Variables
// log(interpreter.input("x = 1"), 1);
// log(interpreter.input("y"), 1);
// log(interpreter.input("x_1234 + 3"), 4);
// log(interpreter.input("(x + 3) + 4"), 8);

// log(interpreter.input("x = 7"), 7);
// log(interpreter.input("x"), 7);
// log(interpreter.input("x + 3"), 10);
// log(interpreter.input("y")); //throw error if it does not exist
// log(interpreter.input("y = x + 5"), 12); 



// (function () { interpreter.input("y"); });