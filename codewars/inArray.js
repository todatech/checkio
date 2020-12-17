const log = console.log;
const assert = require('assert');

function inArray(array1, array2) {

  array1.sort(); array2.sort();
  return array1.filter(substr => {
    for (const str of array2) {
      if (str.includes(substr))
        return true;
    }
    return false;
  });
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
log(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
log(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
log(inArray(a1, a2), [])
