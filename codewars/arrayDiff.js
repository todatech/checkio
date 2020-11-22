const log = console.log;

function arrayDiff(a, b) {

  let arrA = a.slice();
  b.forEach(element => arrA = arrA.filter(v => v !== element))
  return arrA;
}

log(arrayDiff([1, 2], [1]), [2]);
log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3])
log(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
log(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]");
log(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");