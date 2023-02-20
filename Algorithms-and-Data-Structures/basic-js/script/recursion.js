function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([1, 2, 3], 3));
/**
 * 
 
Function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. 
The base case tells the recursive function when it no longer needs to call itself. 
It is a simple case where the return value is already known. 
There will also be a recursive call which executes the original function with different arguments. 
If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. 
This function will need to accept an argument, n, representing the final number. 
Then it will need to call itself with progressively smaller values of n until it reaches 1. 
You could write the function as follows:} 
 */

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

function countdown(n) {
  if (n < 1) {
    return []
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
  return;
}

console.log(countdown(5));

// Use Recursion to Create a Range of Numbers

/**
 * We have defined a function named rangeOfNumbers with two parameters. 
 * The function should return an array of integers which begins with a number 
 * represented by the startNum parameter and ends with a number represented by the endNum parameter. 
 * The starting number will always be less than or equal to the ending number. 
 * Your function must use recursion by calling itself and not use loops of any kind. 
 * It should also work for cases where both startNum and endNum are the same.
 */

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const countArr = rangeOfNumbers(startNum, endNum-1);
    countArr.push(endNum);
    return countArr;
  }

};

  //  Your function should return an array.
  //  Passed:Your code should not use any loop syntax 
  //  (for or while or higher order functions such as forEach, map, filter, or reduce).
  //  rangeOfNumbers should use recursion (call itself) to solve this challenge.
  rangeOfNumbers(1, 5); // should return [1, 2, 3, 4, 5]
  rangeOfNumbers(6, 9); // should return [6, 7, 8, 9]
  rangeOfNumbers(4, 4); //  should return [4]
//  Global variables should not be used to cache the array.