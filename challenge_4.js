/**
 * Challenge
 * 
 * Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
 * Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u)
 * and finally return this modified string. 
 */

const letterChanges = (str) => str.split('').map(character => {
  if (character.match(/[a-z|A-Z]/)) {
    character = String.fromCharCode(character.charCodeAt(0) + 1);
    return character.match(/a|e|i|o|u/i) ? character.toUpperCase() : character;
  } else {
    return character;
  }
}).join('');

console.groupCollapsed('Challenge 4');
console.log(letterChanges('abcd'));
console.log(letterChanges('hello'));
console.log(letterChanges('hello*3'));
console.log(letterChanges('fun times!'));
console.groupEnd();