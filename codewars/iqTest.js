const log = console.log;

function iqTest(numbers) {

  let obj = {
    even: { count: 0, index: 0 },
    odd: { count: 0, index: 0 }
  };

  numbers.split(' ').map(Number).forEach((n, i) => {
    const key = (n % 2)? 'odd': 'even';
    obj[key].count += 1;
    obj[key].index = i + 1;
  });

  return (obj.odd.count < obj.even.count) ? obj.odd.index : obj.even.index;

}

log(iqTest("2 4 7 8 10"), 3);
log(iqTest("1 2 2"), 1);
