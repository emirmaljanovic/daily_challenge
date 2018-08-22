/**
 * Challenge
 * Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
 * Words will be separated by only one space. 
 */

 const letterCapitalize = (str) => str.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.substring(1, word.length)}`).join(' ');
 console.groupCollapsed('Challenge 6 - letterCapitalize');
 console.log(letterCapitalize('some word here'));
 console.log(letterCapitalize('Some other word Goin here'));
 console.log(letterCapitalize('Another someCombo here'));
 console.groupEnd();