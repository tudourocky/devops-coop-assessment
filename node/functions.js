/**
 * This function finds all numbers in the array that are greater than the threshold
 * 
 * CONTAINS INTENTIONAL PERFORMANCE ISSUES FOR INTERVIEW EVALUATION
 */
function findLargeNumbers(numbers = [5, 10, 3, 8, 15, 12, 7, 9, 10, 6, 15, 8], threshold = 10) {
  console.time("findLargeNumbers");

  let result = [];

  result = Array.from(
    new Set(numbers.filter(num => num > threshold))).sort((a, b) => a - b)

  console.timeEnd("findLargeNumbers");
  return result;
}

module.exports.compute = findLargeNumbers
