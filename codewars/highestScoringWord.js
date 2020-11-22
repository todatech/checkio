const log = console.log;

function high(x) {

  const score = x.slice().split(' ').map(w =>
    w.split('').reduce((k, v) =>
      k + v.charCodeAt(0) - 96
      , 0)
  );

  return x.split(' ')[score.indexOf(Math.max(...score))];
}

log(high('man i need a taxi up to ubud'), 'taxi');
log(high('what time are we climbing up the volcano'), 'volcano');
log(high('take me to semynak'), 'semynak');  