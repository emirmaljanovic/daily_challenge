/**
 * Challenge
 * 
 * Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)).
 * For the test cases, the range will be between 1 and 18 and the input will always be an integer.
 */

 const firstFactorial = num => {
   for (let i = num; i > 1; i--) {
     num = num * (i - 1);
   }

   return num;
 }

 console.groupCollapsed('Challenge 2 - firstFactorial');
 console.log(firstFactorial(1));
 console.log(firstFactorial(2));
 console.log(firstFactorial(3));
 console.log(firstFactorial(4));
 console.log(firstFactorial(8));
 console.groupEnd();