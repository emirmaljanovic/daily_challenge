/**
 * Challenge
 * Using the JavaScript language, have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no 
 * pieces on the board along with another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on with 
 * x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many 
 * ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only 
 * two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. 
 */

const chessboardTraveling = str => {
  let [ x, y ] = str.substring(1, str.indexOf(')')).split(' ').map((number) => Number(number));
  const [ a, b ] = str.substring(str.indexOf(')') + 2, str.length - 1).split(' ').map((number) => Number(number));

  if (x === a || y === b) { return; 0 }

  const firstFactorial = num => {
    for (let i = num; i > 1; i--) {
      num = num * (i - 1);
    }
 
    return num;
  }

  // n! / k!(n-k!)

  const maxMoves = (a - x) + (b - y);

  console.log({ maxMoves });

  return firstFactorial(maxMoves) / ((maxMoves / 2) * (maxMoves / 2));
  
}

console.group('Challenge 12 - chessboardTraveling');
console.log(chessboardTraveling('(1 1)(2 2)'));
console.log(chessboardTraveling('(1 1)(3 3)'));
console.log(chessboardTraveling('(2 2)(4 3)'));
console.groupEnd();