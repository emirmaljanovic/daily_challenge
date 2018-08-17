/**
 * Challenge
 * Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning 
 * the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter 
 * must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
 */

const simpleSymbols = (str) => {
  const letters = str.split('');

  // First and last element, if letter, cannot be surrounded by '+'
  if (letters[0].match(/[a-z]/i) || letters[letters.length - 1].match(/[a-z]/i)) { return 'false'; }

  let i = 1;

  while(i < letters.length) {
    if (letters[i].match(/[a-z]/i) && (letters[i - 1] !== '+' || letters[i + 1] !== '+')) { return 'false'; }
    i++;
  }

  return 'true';
}

console.groupCollapsed('Challenge 7');
console.log(simpleSymbols('++d+=====d=+S+'));
console.log(simpleSymbols('+d+=3=+s+'));
console.log(simpleSymbols('f++d+'));
console.groupEnd();