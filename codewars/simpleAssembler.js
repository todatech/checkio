const assert = require('assert');
const log = console.log;

class ASM_Interepreter {

  constructor() {
    this.registers = {};
    this.pc;
    this.code = {
      mov: (x, y) => this.registers[x] = this.resolve(y),
      inc: (x) => this.registers[x] += 1,
      dec: (x) => this.registers[x] -= 1,
      jnz: (x, y) => {
        if (this.resolve(x)) this.pc += (+y - 1);
      },
    }
  }

  resolve = x => isNaN(+x) ? this.registers[x] : +x;
  tokenize = program => program.map(line => line.split(' '));
  parse = tokens => tokens;

  evaluate(ast) {
    for (this.pc = 0; this.pc < ast.length; this.pc++) {
      const node = ast[this.pc];
      this.code[node[0]].apply(null, node.slice(1));
    }
  }

  run(program) {
    log(program);
    this.tokens = this.tokenize(program);
    this.ast = this.parse(this.tokens);
    this.evaluate(this.ast);
    return this.registers;
  }
}

function simple_assembler(program) {
  const asm = new ASM_Interepreter();
  return asm.run(program);
}

log(
  simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']),
  { 'a': 1 }
);

log(
  simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']),
  { 'a': 0, 'b': -20 }
);

log(
  simple_assembler(
    ['mov a 1',
      'mov b 1',
      'mov c 0',
      'mov d 26',
      'jnz c 2',
      'jnz 1 5',
      'mov c 7',
      'inc d',
      'dec c',
      'jnz c -2',
      'mov c a',
      'inc a',
      'dec b',
      'jnz b -2',
      'mov b c',
      'dec d',
      'jnz d -6',
      'mov c 18',
      'mov d 11',
      'inc a',
      'dec d',
      'jnz d -2',
      'dec c',
      'jnz c -5']),
  { a: 318009, b: 196418, c: 0, d: 0 });
