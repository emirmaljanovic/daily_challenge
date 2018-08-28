/**
 * Challenge
 * 
 * Using the JavaScript language, have the function PentagonalNumber(num) read num which will be a positive integer and determine how many dots exist in a pentagonal 
 * shape around a center dot on the Nth iteration. For example, in the image below you can see that on the first iteration there is only a single dot, on the second iteration 
 * there are 6 dots, on the third there are 16 dots, and on the fourth there are 31 dots. 
 *
 *          *
 *    *   * * *
 *         * *

 * Your program should return the number of dots that exist in the whole pentagon on the Nth iteration. 
 */

 /**
  * Formula:
  * numberOfDots = b + ((num * 5) - 5)
  * numberOfDots - number of dots
  * before - whatever we had before (default 1)
  * num - number of iterations
  * @param {Number} num - the number of iterations
  * @returns {Number} numberOfDots
  */
const pentagonalNumber = num => {
  let before = 1;

  const getNumberOfDots = iteration => (iteration * 5) - 5;

  // Calculate number of dots for all previous iterations
  for (let i = 1; i < num; i++) {
    before += getNumberOfDots(i);
  }

  return before + getNumberOfDots(num);
};

console.group('Challenge 14 - PentagonalNumber');
console.log(pentagonalNumber(1), pentagonalNumber(1) === 1);
console.log(pentagonalNumber(2), pentagonalNumber(2) === 6);
console.log(pentagonalNumber(3), pentagonalNumber(3) === 16);
console.log(pentagonalNumber(4), pentagonalNumber(4) === 31);
console.log(pentagonalNumber(5), pentagonalNumber(5) === 51);
console.log(pentagonalNumber(6), pentagonalNumber(6) === 76);
console.groupEnd();