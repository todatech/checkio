const log = console.log;

// var fruits = ["apple","banana","cherry"];
// var direction = 1;  // or -1

// var i = direction > 0 ? 0 : fruits.length - 1,
//     stop = direction > 0 ? fruits.length : -1;
// for (; i != stop; i += direction)
//     console.log(i, fruits[i]);

function generateAddLoookup() {

  let result = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      let obj = { v: (i + j) % 10, c: (i + j >= 10) }
      row.push(obj);
    }
    result.push(row);
  }
  return result;
}

// log(generateAddLoookup());

function generateMulLookup() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      let obj = { t: Math.floor((i * j) / 10), u: (i * j) % 10 }
      row.push(obj);
    }
    result.push(row);
  }
  return result;
}

// log(generateMulLookup());

function generateSubLookup() {

  let result = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      let obj = { v: Math.abs(i - j), n: ((i - j) < 0) }
      row.push(obj);
    }
    result.push(row);
  }
  return result;
}

log(generateSubLookup());