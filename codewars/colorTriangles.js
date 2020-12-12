const log = console.log;
const assert = require('assert');

// Note, can use ''.substr to simplify this

const lookup = {
  'GG': 'G', 'GR': 'B', 'GB': 'R',
  'RR': 'R', 'RG': 'B', 'RB': 'G',
  'BB': 'B', 'BG': 'R', 'BR': 'G'
}

function triangle(row) {
  const genArr = line => {
    const result = [];
    for (const [i, v] of Object.entries(line)) {
      const a = line[+i + 1];
      if (a !== undefined)
        result.push(v.concat(a));
    }
    return result;
  }

  let line = row;
  while (line.length > 1) {
    const arr = genArr(line);
    line = arr.map(pair => lookup[pair]).join('');
  }
  return line;
}

log(triangle('GB'), 'R');
log(triangle('RRR'), 'R');
log(triangle('RGBG'), 'B');
log(triangle('RBRGBRB'), 'G');
log(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
log(triangle('B'), 'B');