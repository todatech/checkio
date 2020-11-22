const log = console.log;

// function sumTwoSmallestNumbers(numbers) {
const sumTwoSmallestNumbers = n => n.sort((a, b) => a - b).slice(0, 2).reduce((k, v) => k + v);

log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");
