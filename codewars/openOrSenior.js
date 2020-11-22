const log = console.log;

// 'Senior' => [0] > 55, [1] < 7
// skill, [1] => lower the better from -2 + 26
const openOrSenior = d => d.map(s => (s[0] >= 55 && s[1] > 7) ? 'Senior' : 'Open');

log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open'])
log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])