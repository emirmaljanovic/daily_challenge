/**
 * Challenge
 * 
 * Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
 * For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 
 */

 const firstReverse = (str) => str.split('').reverse().join('');

 console.groupCollapsed('Challenge 3');
 console.log(firstReverse('hello'));
 console.log(firstReverse('Hello World and Coders'));
 console.groupEnd();