/**
 * Challenge
 * Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order 
 * (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
 */

const alphabetSoup = (str) => str.split('').sort((letter1, letter2) => letter1 < letter2 ? -1 : 1).join('');

export default alphabetSoup;