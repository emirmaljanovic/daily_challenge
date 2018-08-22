/**
 * Challenge
 * Using the JavaScript language, have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits.
 * Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number),
 * and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing
 * the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example:
 * if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 

 * Hard challenges are worth 15 points and you are not timed for them.
 */

const kaprekarsConstant = (num) => {
  const sortNumber = (number, asc = true) => Number(number.toString().split('').sort((a, b) => asc ? a - b : b - a).join(''));
  const ensureDigits = number => number.toString().length < 4 ? Number(`${number}${'0'.repeat(4 - number.toString().length)}`) : number;

  let counter = 1;
  let res = ensureDigits(sortNumber(num, false) - sortNumber(num, true));

  while(res !== 6174) {
    res = ensureDigits(sortNumber(res, false) - sortNumber(res, true));
    counter++;
  }

  return counter;
}

console.groupCollapsed('Challenge 11 - kaprekarsConstant');
console.log(kaprekarsConstant(2111), kaprekarsConstant(2111) === 5);
console.log(kaprekarsConstant(9831), kaprekarsConstant(9831) === 7);
console.log(kaprekarsConstant(52), kaprekarsConstant(52) === 6);
console.groupEnd();