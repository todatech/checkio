const log = console.log;

const API = {
  add(val) { return num => { log('in add'); return num + val;} },
  subtract(val) { return num => {log('in sub'); return num - val;} },
  multiplyBy(val) { return num => {log('in mul'); return num * val;} },
  divideBy(val) { return num => {log('in div'); return num / val;} }
}

function Wrap(chain = []) {
  let compute = (num) => {
    // Iterate through the chain and applies the calculations
    return chain.reduce((mem, fn) => {log('reduce: ', mem, fn); return fn(mem); }, num);
  }

  for (let key in API) {
    const fn = API[key];
    compute[key] = (num) => {
      return Wrap([...chain, fn(num)]);
    }
  }

  return compute;
}

const operation = Wrap()
  .multiplyBy(2)
  .subtract(6)
  .divideBy(2);

const opx2 = Wrap().multiplyBy(2);

const opx3 = opx2;

opx3.subtract(3);

opx3.add(4);

log(opx2(1));
log(opx3(1));



log(operation(33)); // => 30