const log = console.log;
const assert = require('assert');

function cakes(recipe, available) {
  let result = [];
  for (const [k, v] of Object.entries(recipe))
    if (v != 0)
      result.push(available[k] ? Math.floor(available[k] / v) : 0);
  return Math.min(...result);
}


recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
log(cakes(recipe, available), 2, 'Wrong result for example #1');

recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available2 = { sugar: 500, flour: 2000, milk: 2000 };
log(cakes(recipe2, available2), 0, 'Wrong result for example #2');
