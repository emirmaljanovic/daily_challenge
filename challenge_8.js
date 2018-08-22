/**
 * Challenge
 * Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, 
 * otherwise return the string false. If the parameter values are equal to each other then return the string -1.
 */

const checkNums = (num1, num2) => num1 < num2 ? 'true' : num1 === num2 ? '-1' : 'false';

console.groupCollapsed('Challenge 8 - checkNums');
console.log(checkNums(3, 122));
console.log(checkNums(67, 67));
console.log(checkNums(15, 7));
console.groupEnd();