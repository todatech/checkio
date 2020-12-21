const log = console.log;
const assert = require('assert');

function primeFactors(num) {

  if (num <= 0)
    return [];

  let p = 2, result = [];
  while (num >= p ** 2) {
    if (num % p) {
      p++;
    } else {
      result.push(p);
      num /= p;
    }
  }
  result.push(num);

  const obj = result.reduce((k, v) => {
    k[v] = ++k[v] || 1;
    return k
  }, {});

  return Object.entries(obj).sort((a, b) => a[0] - b[0])
    .reduce((k, v) =>
      k.concat((v[1] > 1) ? '(' + v[0] + '**' + v[1] + ')' : '(' + v[0] + ')'), '');
}

log(primeFactors(7775460), "(2**2)(3**3)(5)(7)(11**2)(17)")