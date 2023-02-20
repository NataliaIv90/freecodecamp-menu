/**
 * Use the conditional operator in the checkEqual function to check 
 * if two numbers are equal or not. 
 * The function should return either the string Equal or the string Not Equal.
 */

function checkEqual(a, b) {
  return (a === b) ? "Equal" : "Not Equal"
}

checkEqual(1, 2);

/**
 * In the checkSign function, use multiple conditional operators - 
 * following the recommended format used in findGreaterOrEqual - 
 * to check if a number is positive, negative or zero. 
 * The function should return positive, negative or zero.
 */

function checkSign(num) {
  return (num < 0) ? "negative"
    : (num > 0) ? "positive"
      : "zero";
}

checkSign(10);