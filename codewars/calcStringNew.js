const log = console.log;
const assert = require('assert');

function Stack() {
  this.stack = [];
  // this.size = () => this.stack.length;
  this.push = (elem) => this.stack.push(elem);
  this.pop = () => this.stack.pop();
  this.peek = () => this.stack[this.stack.length - 1];
}

function Interpreter() {
  this.symbols = {
    '--': { precedence: 5 },    // unary minus
    '%': { precedence: 3 },
    '*': { precedence: 3 },
    '/': { precedence: 3 },
    '+': { precedence: 2 },
    '-': { precedence: 2 },
    '(': { precedence: 1 },
    ')': { precedence: 1 },
    '#': { precedence: 1 },    // top of stack
  }
}

Interpreter.prototype.tokenize = function (program) {
  if (program === "") { return []; }

  const reOperators = '[-+*\\/\\%=\\(\\)]';
  const reNumbers = '[0-9]*\\.?[0-9]+'
  // const reLiterals = '[A-Za-z_][A-Za-z0-9_]*';

  const isOperators = c => RegExp(reOperators, 'g').test(c);
  const isNumbers = c => RegExp(reNumbers, 'g').test(c);
  // const isLiterals = c => RegExp(reLiterals, 'g').test(c);

  const reStr = `\s*(${reOperators}|${reNumbers})\s*`
  // const reStr = `\s*(${reOperators}|${reLiterals}|${reNumbers})\s*`

  const regex = new RegExp(reStr, 'g');
  tokens = program.split(regex).map(s => s.trim()).filter(s => s.length);

  tokens = tokens.map((t) => {
    if (isOperators(t)) {
      return {
        type: 'operators', value: t
      }
    } else if (isNumbers(t)) {
      let num = parseFloat(t);
      if (!isFinite(num)) throw 'number is too large';
      return {
        type: 'numbers', value: num
      }
      // } else if (isLiterals(t)) {
      //   return {
      //     type: 'literals', value: t
      //   }
    } else {
      throw new Error('Invalid token found!');
    }
  });

  // search and flag for unary minus
  tokens = tokens.map((t, i, arr) => {
    if (t.type === 'operators' && t.value === '-') {
      if ((i === 0) || (arr[i - 1].type === 'operators' && arr[i - 1].value !== ')') || (arr[i - 1].value === '(')) {
        t.value = '--';
      }
    }
    return t;
  });

  return tokens;
};

// parse infix tokens to postfix expression
Interpreter.prototype.parse = function (tokens) {

  const postfix = new Stack();
  const opStack = new Stack();

  // add this at the top stack, so it has something to compare at first
  opStack.push({
    type: 'top',
    value: '#',
  })

  tokens.forEach(token => {
    if (token.type === 'numbers') {
      postfix.push(token);
    } else if (token.type === 'operators') {
      if (token.value === '(') {
        opStack.push(token);
      } else {
        if (token.value === ')') {
          let a = opStack.pop();
          while (a.value !== '(') {
            postfix.push(a);
            a = opStack.pop();
          }
        } else {
          let value = token.value;
          let stack = opStack.peek().value;
          if (this.symbols[value].precedence > this.symbols[stack].precedence) {
            opStack.push(token);
          } else {
            while (this.symbols[value].precedence <= this.symbols[stack].precedence) {
              postfix.push(opStack.pop())
              stack = opStack.peek().value;
            }
            opStack.push(token);
          }
        }
      }
    }
  })

  let a = opStack.pop();
  while (a.value !== '#') {
    postfix.push(a);
    a = opStack.pop();
  }

  return postfix.stack;
}

Interpreter.prototype.evaluate = function (postfix) {

  const stack = new Stack();

  postfix.forEach(t => {
    if (t.type === 'numbers') {
      stack.push(t);
    } else {
      let obj = { type: 'numbers', value: null };

      if (t.value === '--') {
        obj.value = -stack.pop().value;
      } else {
        let op2 = stack.pop().value;
        let op1 = stack.pop().value;

        switch (t.value) {
          case '%':
            obj.value = op1 % op2;
            break;
          case '*':
            obj.value = op1 * op2;
            break;
          case '/':
            obj.value = op1 / op2;
            break;
          case '+':
            obj.value = op1 + op2;
            break;
          case '-':
            obj.value = op1 - op2;
            break;
        }
      }
      stack.push(obj);
    }
  });

  return stack.stack[0].value;
}

Interpreter.prototype.input = function (expr) {
  const tokens = this.tokenize(expr);
  const postfix = this.parse(tokens);
  return this.evaluate(postfix);
};


// Checks
var interpreter = new Interpreter();

// Basic arithmetic
log(interpreter.input("2*(3+4)*5"), 70);
log(interpreter.input("1 + 1"), 2);
log(interpreter.input("2 - 1"), 1);
log(interpreter.input("2 * 3"), 6);
log(interpreter.input("8 / 4"), 2);
log(interpreter.input("7 % 4"), 3);

// Extra 1
log(interpreter.input('1+1'), 2);
log(interpreter.input('1 - 1'), 0);
log(interpreter.input('1* 1'), 1);
log(interpreter.input('1 /1'), 1);
log(interpreter.input('-123'), -123);
log(interpreter.input('123'), 123);
log(interpreter.input('1*(2+3)'), 5);
log(interpreter.input('12* 123'), 1476);
log(interpreter.input('2 /2+3 * 4.75- -6'), 21.25);
log(interpreter.input('2 / (2 + 3) * 4.33 - -6'), 7.732);

// Extra 2
log(interpreter.input('12*-1'), -12);
log(interpreter.input('12* 123/-(-5 + 2)'), 492);
log(interpreter.input('((80 - (19)))'), 61);
log(interpreter.input('(1 - 2) + -(-(-(-4)))'), 3);
log(interpreter.input('1 - -(-(-(-4)))'), -3);
log(interpreter.input('(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11)'), 1);
log(interpreter.input('((2.33 / (2.9+3.5)*4) - -6)'), 7.45625);
log(interpreter.input('123.45*(678.90 / (-2.5+ 11.5)-(80 -19) *33.25) / 20 + 11'), -12042.760875);