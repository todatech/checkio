const log = console.log;

class SmallestIntegerFinder {
  findSmallestInt (arr) {
    return arr.sort((a, b) => a - b)[0];  
  } 
}


var sif = new SmallestIntegerFinder();
log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
log(sif.findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
log(sif.findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
log(sif.findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
log(sif.findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');
