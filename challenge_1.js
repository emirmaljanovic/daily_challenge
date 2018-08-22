/**
 * Challenge
 * 
 * Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
 * If there are two or more words that are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty. 
 */


const longestWord = sen => sen.split(' ').reduce((wordOne, wordTwo) => (wordOne || '').match(/\w/g).length >= (wordTwo || '').match(/\w/g).length ? wordOne : wordTwo);

console.groupCollapsed('Challenge 1 - longestWord');
console.log(longestWord('Some, string here'));
console.log(longestWord('fun&!! longer one'));
console.groupEnd();