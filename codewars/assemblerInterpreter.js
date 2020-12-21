const assert = require('assert');
const log = console.log;

function Stack() {
  this.stack = [];
  this.push = (elem) => this.stack.push(elem);
  this.pop = () => this.stack.pop();
  this.top = () => this.stack.length;
}

class ASM_Interepreter {

  constructor() {
    this.pc = 0;
    this.stack = new Stack();
    this.regs = {};
    this.labels = {};
    this.cmpRegA;
    this.cmpRegB;
    this.messageReg = '';
    this.code = {
      mov: (x, y) => this.regs[x] = this.resolve(y),
      inc: (x) => this.regs[x] += 1,
      dec: (x) => this.regs[x] -= 1,
      add: (x, y) => this.regs[x] += this.resolve(y),
      sub: (x, y) => this.regs[x] -= this.resolve(y),
      mul: (x, y) => this.regs[x] *= this.resolve(y),
      div: (x, y) => this.regs[x] = Math.floor(this.regs[x] / this.resolve(y)),
      cmp: (x, y) => { this.cmpRegA = this.resolve(x); this.cmpRegB = this.resolve(y); },
      jmp: x => this.goToLabel(x),
      jne: x => { if (this.cmpRegA !== this.cmpRegB) this.goToLabel(x); },
      je: x => { if (this.cmpRegA === this.cmpRegB) this.goToLabel(x); },
      jge: x => { if (this.cmpRegA >= this.cmpRegB) this.goToLabel(x); },
      jg: x => { if (this.cmpRegA > this.cmpRegB) this.goToLabel(x); },
      jle: x => { if (this.cmpRegA <= this.cmpRegB) this.goToLabel(x); },
      jl: x => { if (this.cmpRegA < this.cmpRegB) this.goToLabel(x); },
      call: x => { this.pushStack(); this.goToLabel(x); },
      ret: () => this.popStack(),
      msg: (...args) => this.messageReg = args.reduce((k, v) => k.concat(this.resolveString(v)), ''),
    }
  }

  // helper functions
  resolve(x) { return isNaN(+x) ? this.regs[x] : +x; }
  resolveString(x) { return /"[^"]*"|'[^']*'/.test(x) ? x.replace(/['"]/g, '') : this.regs[x]; }
  goToLabel(x) { this.pc = this.labels[x]; }
  pushStack() { this.stack.push(this.pc); }
  popStack() { if (this.stack.top() > 0) this.pc = this.stack.pop(); };

  // program flow
  tokenize(program) {
    return program.replace(/;.+/g, '')    // this removes ; comments
      .split('\n')
      .map(line => line.match(/[^\s"',]+|"[^"]*"|'[^']*'/g))
      .filter(v => v !== null);
  }

  parse(tokens) {
    const re = new RegExp(/(.+?):/);
    for (let i = 0; i < tokens.length; i++) {
      // extract labels from main tokens list
      const token = tokens[i];
      if (re.test(token[0])) {
        const m = token[0].match(re);
        this.labels[m[1]] = i - 1;
        tokens.splice(i, 1);
        i--;
      }
    }
    return tokens;
  }

  evaluate(ast) {
    while (true) {
      const node = ast[this.pc];
      if (node === undefined)
        return -1;
      if (node[0] === 'end')
        return 0;
      
      const fn = this.code[node[0]];
      if (fn === undefined)
        return -1;
      fn.apply(null, node.slice(1));
      this.pc++;
    }
  }

  run(program) {
    const result = this.evaluate(this.parse(this.tokenize(program)));
    return (result === 0) ? this.messageReg : result;
  }
}

function assemblerInterpreter(program) {
  const asm = new ASM_Interepreter();
  return asm.run(program);
}

// Test.describe('Example programs', function() {
var program = `; My first program
  mov  a, 5
  inc  a
  call function
  msg  '(5+1)/2 = ', a    ; output message
  end
  
  function:
      div  a, 2
      ret`

log(assemblerInterpreter(program), '(5+1)/2 = 3');

var program_factorial = `mov   a, 5
  mov   b, a
  mov   c, a
  call  proc_fact
  call  print
  end

  proc_fact:
      dec   b
      mul   c, b
      cmp   b, 1
      jne   proc_fact
      ret

  print:
      msg   a, '! = ', c ; output text
      ret`

log(assemblerInterpreter(program_factorial), '5! = 120');

var program_fibonacci = `mov   a, 8            ; value
  mov   b, 0            ; next
  mov   c, 0            ; counter
  mov   d, 0            ; first
  mov   e, 1            ; second
  call  proc_fib
  call  print
  end

  proc_fib:
      cmp   c, 2
      jl    func_0
      mov   b, d
      add   b, e
      mov   d, e
      mov   e, b
      inc   c
      cmp   c, a
      jle   proc_fib
      ret

  func_0:
      mov   b, c
      inc   c
      jmp   proc_fib

  print:
      msg   'Term ', a, ' of Fibonacci series is: ', b        ; output text
      ret`

log(assemblerInterpreter(program_fibonacci), 'Term 8 of Fibonacci series is: 21');

var program_mod = `mov   a, 11           ; value1
  mov   b, 3            ; value2
  call  mod_func
  msg   'mod(', a, ', ', b, ') = ', d        ; output
  end

  ; Mod function
  mod_func:
      mov   c, a        ; temp1
      div   c, b
      mul   c, b
      mov   d, a        ; temp2
      sub   d, c
      ret`

log(assemblerInterpreter(program_mod), 'mod(11, 3) = 2');

var program_gcd = `mov   a, 81         ; value1
  mov   b, 153        ; value2
  call  init
  call  proc_gcd
  call  print
  end

  proc_gcd:
      cmp   c, d
      jne   loop
      ret

  loop:
      cmp   c, d
      jg    a_bigger
      jmp   b_bigger

  a_bigger:
      sub   c, d
      jmp   proc_gcd

  b_bigger:
      sub   d, c
      jmp   proc_gcd

  init:
      cmp   a, 0
      jl    a_abs
      cmp   b, 0
      jl    b_abs
      mov   c, a            ; temp1
      mov   d, b            ; temp2
      ret

  a_abs:
      mul   a, -1
      jmp   init

  b_abs:
      mul   b, -1
      jmp   init

  print:
      msg   'gcd(', a, ', ', b, ') = ', c
      ret`

log(assemblerInterpreter(program_gcd), 'gcd(81, 153) = 9');

var program_fail = `call  func1
  call  print
  end

  func1:
      call  func2
      ret

  func2:
      ret

  print:
      msg 'This program should return -1'`

log(assemblerInterpreter(program_fail), -1);

var program_power = `mov   a, 2            ; value1
  mov   b, 10           ; value2
  mov   c, a            ; temp1
  mov   d, b            ; temp2
  call  proc_func
  call  print
  end

  proc_func:
      cmp   d, 1
      je    continue
      mul   c, a
      dec   d
      call  proc_func

  continue:
      ret

  print:
      msg a, '^', b, ' = ', c
      ret`

log(assemblerInterpreter(program_power), '2^10 = 1024');