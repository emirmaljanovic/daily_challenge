/**
 * Challenge
 * Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
 * Words will be separated by only one space. 
 */

 const letterCapitalize = (str) => str.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.substring(1, word.length)}`).join(' ');

 export default letterCapitalize;