const assert = require('assert');
const logc = console.log;
const log = function () { };

function sum(x, y) { log('in sum'); return x + y; }
function double(x) { log('in double'); return sum(x, x); }
function minus(x, y) { log('in minus'); return x - y; }
function addOne(x) { log('in addOne'); return sum(x, 1); }

function addOneArr(arr) {
  log('in addOneArr');
  return arr.map(function (v) { return v + 1; });
}

function chain(fns, arr = []) {

  function wrap(func) {
    return function (...args) {
      const f = (acc) => {
        const facc = (acc === undefined) ? 0 : acc;
        let fargs = (args.length === 2) ? args : [facc, ...args];
        fargs = (Array.isArray(args[0]) && args[0].length) ? args : fargs;
        return func.call(this, ...fargs);
      }
      return f;
    }
  }

  const compute = {};
  compute['execute'] = () => arr.reduce((acc, fn) => fn(acc), 0);

  for (let key in fns) {
    const fn = wrap(fns[key]);
    compute[key] = (...args) => chain(fns, [...arr, fn(...args)]);
  }
  return compute;
}


// const API = { addOneArr, sum }
const API = { sum, double, minus, addOne, addOneArr };
const c = chain(API);
logc(c.addOneArr([2, 3, 4]).execute());

logc(c.sum(3, 4).execute()); //7
logc(c.sum(1, 2).execute()); //3
logc(c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()); // 72

var c1 = c.sum(1, 2);
logc(c1.execute()); // == fns.sum(1, 2) == 3
logc(c1.double().execute()); // == fns.double(fns.sum(1, 2)) == 6
logc(c1.addOne().execute()); // == fns.addOne(fns.sum(1, 2)) == 4
logc(c1.execute()); // == fns.sum(1, 2) == 3

var c2 = c1.sum(5);
logc(c2.addOne().execute()); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
logc(c2.sum(3).execute()); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
logc(c2.execute()); // == fns.sum(fns.sum(1, 2), 5) == 8
logc(c1.execute()); // == fns.sum(1, 2) == 3
