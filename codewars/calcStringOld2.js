const log = console.log;

const reOperators = '[-+*\/\%=\(\)]';
const reLiterals = '[A-Za-z_][A-Za-z0-9_]*';
const reNumbers = '[0-9]*\.?[0-9]+'

const isOperators = c => RegExp(reOperators, 'g').test(c);
const isLiterals = c => RegExp(reLiterals, 'g').test(c);
const isNumbers = c => RegExp(reNumbers, 'g').test(c);

function Interpreter() {
  this.symbols = {};
  this.counter = 0;
  this.tokens = [];
}

Interpreter.prototype.tokenize = function (program) {
  if (program === "")
    return [];

  const reStr = `\s*(${reOperators}|${reLiterals}|${reNumbers})\s*`
  const regex = new RegExp(reStr, 'g');

  let tokens = program.split(regex).filter(s => !s.match(/^\s*$/));
  tokens = tokens.map(t => {

    if (isOperators(t)) {
      return {
        type: t
      }
    } else if (isLiterals(t)) {
      return {
        type: 'literals',
        value: t
      }
    } else if (isNumbers(t)) {
      let num = parseFloat(t);
      if (!isFinite(num)) throw 'number is too large';
      return {
        type: 'numbers',
        value: num,
      }
    }
    return t;
  });

  tokens.push({
    type: 'end',
    done: true,
  });

  return tokens;
};

Interpreter.prototype.createSymbol = function (id, nud, lbp, led) {
  const sym = this.symbols[id] || {};
  this.symbols[id] = {
    lbp: sym.lbp || lbp,
    nud: sym.nud || nud,
    led: sym.led || led
  }
}
Interpreter.prototype.infix = function (id, lbp, rbp, led) {
  rbp = rbp || lbp;
  this.createSymbol(id, null, lbp, led || function (left) {
    return {
      type: id,
      left: left,
      right: this.expression(rbp)
    };
  });
}

Interpreter.prototype.prefix = function (id, rbp) {
  this.createSymbol(id, function (context) {
    return {
      type: id,
      right: context.expression(rbp)
    }
  })
}

Interpreter.prototype.expression = function (rbp) {
  let left;
  let t = this.getToken();
  this.nextToken();
  t.nud.bind(this);

  left = t.nud(t);
  while (rbp < this.getToken().lbp){
    t = this.getToken();
    this.nextToken();
    t.led.bind(this);
    left = t.led(left);
  }
  return left;
}

Interpreter.prototype.getToken = function () {
  return this.interpretToken(this.tokens[this.counter]);
}

Interpreter.prototype.nextToken = function () {
  this.counter++;
  return this.interpretToken(this.tokens[this.counter]);
}

Interpreter.prototype.interpretToken = function (token) {
  const sym = Object.assign({},this.symbols[token.type]);
  sym.type = token.type;
  sym.value = token.value;
  return sym;
}



Interpreter.prototype.parse = function () {
  const parseTree = [];

  while(this.getToken().type !== 'end') {
    parseTree.push(this.expression(0));
    parseTree.push()
  }
  // this.tokens.forEach(token => parseTree.push(this.interpretToken(token)))

  return parseTree;
}

Interpreter.prototype.input = function (expr) {
  this.tokens = this.tokenize(expr);
  log(this.tokens);
  this.prefix('-', 7);
  this.infix('*', 4);
  this.infix('/', 4);
  this.infix('%', 4);
  this.infix('+', 3);
  this.infix('-', 3);

  this.createSymbol('end');

  this.createSymbol('numbers', function(number) {
    return number;
  });

  this.createSymbol('literals', function(name) {
    return name;
  });

  this.infix('=', 1,2, function (left) {
    if (left.type === 'literals') {
      return {
        type: 'assign',
        name: left.value,
        value: this.expression(2)
      };
    }
    return left; 
  });

  var parseTree = this.parse();
  log(parseTree);
};

var interpreter = new Interpreter();

// Basic arithmetic
log(interpreter.input("1 + 1"), 2);
log(interpreter.input("2 - 1"), 1);
log(interpreter.input("2 * 3"), 6);
log(interpreter.input("8 / 4"), 2);
log(interpreter.input("7 % 4"), 3);

//Variables
log(interpreter.input("x = 1"), 1);
log(interpreter.input("y"), 1);
log(interpreter.input("x + 3"), 4);
// (function () { interpreter.input("y"); });