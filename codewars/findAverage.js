const log = console.log;

const find_average = (array) => array.reduce((k, v, i, a) => {
  k += v;
  return (i === a.length - 1) ? (k / (i + 1)) : k;
})

log(find_average([1, 1, 1]), 1);
log(find_average([1, 2, 3]), 2);