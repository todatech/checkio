const log = console.log;

var gcd = function (a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}




let a = [2, 6, 14, 2, 6];
let b = [2, 6];
let c = [6, 12];


log(gcd2(a))