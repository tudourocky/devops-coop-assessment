/**
 * This function finds all numbers in the array that are greater than the threshold
 * 
 * CONTAINS INTENTIONAL PERFORMANCE ISSUES FOR INTERVIEW EVALUATION
 */
function findLargeNumbers(numbers = [5, 10, 3, 8, 15, 12, 7, 9, 10, 6, 15, 8], threshold = 10) {
  console.time("findLargeNumbers");

  let result = [];

  // Process the array multiple times unnecessarily
  for (let i = 0; i < numbers.length; i++) {
    // Unnecessary array copy on each iteration
    const numbersCopy = [...numbers];

    const currentNumber = numbersCopy[i];

    // Inefficient - checking if already in results by looping through the array
    let alreadyInResults = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === currentNumber) {
        alreadyInResults = true;
        break;
      }
    }

    // Simple condition but with unnecessary string conversion
    if (Number(currentNumber.toString()) > threshold && !alreadyInResults) {
      // Add to results array
      result.push(currentNumber);
    }
  }

  // Sort the array in a simple but inefficient way
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        // Swap elements
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  console.timeEnd("findLargeNumbers");
  return result;
}

module.exports.compute = findLargeNumbers
