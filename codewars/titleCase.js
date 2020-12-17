const log = console.log;
const assert = require('assert');

function titleCase(title, minorWords = '') {

  if (!title.length)
    return '';

  const minorArr = minorWords.toLowerCase().split(' ');

  return title.toLowerCase()
    .split(' ')
    .map((v, i) => {
      if ((i == 0) || !minorArr.some(word => word === v))
        v = v[0].toUpperCase() + v.slice(1,);
      return v;
    }).join(' ');
}

log(titleCase(''), '')
log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
log(titleCase('the quick brown fox'), 'The Quick Brown Fox')
log(titleCase('First a of in', 'an often into'), "First A Of In");