import checkNums from './challenges/checkNums';
import timeConvert from './challenges/timeConvert';
import longestWord from './challenges/longestWord';
import firstReverse from './challenges/firstReverse';
import simpleAdding from './challenges/simpleAdding';
import alphabetSoup from './challenges/alphabetSoup';
import letterChanges from './challenges/letterChanges';
import simpleSymbols from './challenges/simpleSymbols';
import maximalSquare from './challenges/maximalSquare';
import firstFactorial from './challenges/firstFactorial';
import letterCapitalize from './challenges/letterCapitalize';
import pentagonalNumber from './challenges/pentagonalNumber';
import kaprekarsConstant from './challenges/kaprekarsConstant';
import chessboardTraveling from './challenges/chessboardTraveling';
import sumInArray from './challenges/sumInArray';
import productArray from './challenges/productArray';
import { TreeNode, serialize, deserialize } from './challenges/binaryTreeSerializer';
import lowestPositiveInt from './challenges/lowestPositiveInt';
import { cons, car, cdr } from './challenges/carCdrPair';
import diagonalDifference from './challenges/diagonalDifference';
import minMaxSum from './challenges/minMaxSum';

import challenges from './challenges.json';

const challengesWrapper = document.querySelector('.challenges');

const generateChallenges = () => {
  challenges.forEach(({ title, description }) => {
    const challengeDOM = document.createElement('div');
    const challengeTitleDOM = document.createElement('span');
    const challengeDescriptionDOM = document.createElement('p');
    
    challengeDOM.className = 'challenge';
    challengeTitleDOM.className = 'title';
    challengeTitleDOM.innerText = title;
    challengeDescriptionDOM.innerText = description;

    challengeDOM.appendChild(challengeTitleDOM);
    challengeDOM.appendChild(challengeDescriptionDOM);

    challengesWrapper.appendChild(challengeDOM);
  });
};

challengesWrapper.innerHTML = '';
generateChallenges();

console.groupCollapsed('Challenge 1 - longestWord');
console.log(longestWord('Some, string here'));
console.log(longestWord('fun&!! longer one'));
console.groupEnd();

console.groupCollapsed('Challenge 2 - firstFactorial');
console.log(firstFactorial(1));
console.log(firstFactorial(2));
console.log(firstFactorial(3));
console.log(firstFactorial(4));
console.log(firstFactorial(8));
console.groupEnd();

console.groupCollapsed('Challenge 3 - firstReverse');
console.log(firstReverse('hello'));
console.log(firstReverse('Hello World and Coders'));
console.groupEnd();

console.groupCollapsed('Challenge 4 - letterChanges');
console.log(letterChanges('abcd'));
console.log(letterChanges('hello'));
console.log(letterChanges('hello*3'));
console.log(letterChanges('fun times!'));
console.groupEnd();

console.groupCollapsed('Challenge 5 - simpleAdding');
console.log(simpleAdding(4));
console.log(simpleAdding(5));
console.groupEnd();

console.groupCollapsed('Challenge 6 - letterCapitalize');
console.log(letterCapitalize('some word here'));
console.log(letterCapitalize('Some other word Goin here'));
console.log(letterCapitalize('Another someCombo here'));
console.groupEnd();

console.groupCollapsed('Challenge 7 - simpleSymbols');
console.log(simpleSymbols('++d+=====d=+S+'));
console.log(simpleSymbols('+d+=3=+s+'));
console.log(simpleSymbols('f++d+'));
console.groupEnd();

console.groupCollapsed('Challenge 8 - checkNums');
console.log(checkNums(3, 122));
console.log(checkNums(67, 67));
console.log(checkNums(15, 7));
console.groupEnd();

console.groupCollapsed('Challenge 9 - timeConvert');
console.log(timeConvert(63));
console.log(timeConvert(126));
console.log(timeConvert(520));
console.log(timeConvert(1440));
console.groupEnd();

console.groupCollapsed('Challenge 10 - alphabetSoup');
console.log(alphabetSoup('hello'), alphabetSoup('hello') === 'ehllo');
console.log(alphabetSoup('coderbyte'), alphabetSoup('coderbyte') === 'bcdeeorty');
console.log(alphabetSoup('hooplah'), alphabetSoup('hooplah') === 'ahhloop');
console.groupEnd();

console.groupCollapsed('Challenge 11 - kaprekarsConstant');
console.log(kaprekarsConstant(2111), kaprekarsConstant(2111) === 5);
console.log(kaprekarsConstant(9831), kaprekarsConstant(9831) === 7);
console.log(kaprekarsConstant(52), kaprekarsConstant(52) === 6);
console.groupEnd();

console.groupCollapsed('Challenge 12 - chessboardTraveling');
console.log(chessboardTraveling('(1 1)(2 2)'), chessboardTraveling('(1 1)(2 2)') === 2);
console.log(chessboardTraveling('(1 1)(3 3)'), chessboardTraveling('(1 1)(3 3)') === 6);
console.log(chessboardTraveling('(2 2)(4 3)'), chessboardTraveling('(2 2)(4 3)') === 3);
console.log(chessboardTraveling('(1 1)(8 8)'), chessboardTraveling('(1 1)(8 8)') === 3432);
console.groupEnd();

console.groupCollapsed('Challenge 13 - maximalSquare');
console.log(maximalSquare('10100', '10111', '11111', '10010'), maximalSquare('10100', '10111', '11111', '10010') === 4);
console.log(maximalSquare('0111', '1111', '1111', '1111'), maximalSquare('0111', '1111', '1111', '1111') === 9);
console.log(maximalSquare('0111', '1101', '0111'), maximalSquare('0111', '1101', '0111') === 1);
console.groupEnd();

console.groupCollapsed('Challenge 14 - PentagonalNumber');
console.log(pentagonalNumber(1), pentagonalNumber(1) === 1);
console.log(pentagonalNumber(2), pentagonalNumber(2) === 6);
console.log(pentagonalNumber(3), pentagonalNumber(3) === 16);
console.log(pentagonalNumber(4), pentagonalNumber(4) === 31);
console.log(pentagonalNumber(5), pentagonalNumber(5) === 51);
console.log(pentagonalNumber(6), pentagonalNumber(6) === 76);
console.groupEnd();

console.groupCollapsed('Challenge 15 - SumInArray');
console.log(sumInArray([10, 15, 3, 7], 13));
console.log(sumInArray([10, 15, 3, 7], 20));
console.groupEnd();

console.groupCollapsed('Challenge 16 - ProductArray');
console.log(productArray([3, 2, 1]));
console.log(productArray([1, 2, 3, 4, 5]));
console.groupEnd();

console.groupCollapsed('Challenge 17 - BinaryTree serialize/deserialize');
const node = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));
console.log(serialize(node));
console.log(deserialize(serialize(node)));
console.log(deserialize(serialize(node)).left.left.val === 'left.left');
console.groupEnd();

console.groupCollapsed('Challenge 18 - lowestPositiveInt');
console.log(lowestPositiveInt([3, 4, -1, 1]));
console.log(lowestPositiveInt([1, 2, 0]));
console.log(lowestPositiveInt([-5, 10, 9, -4, -3, 0, 5, -1, 5, 1, 2, 4, 3, 7, 6, 8]));
console.groupEnd();

console.groupCollapsed('Challenge 19 - carcdrPair');
console.log(car(cons(3,4)));
console.log(cdr(cons(3,4)));
console.groupEnd();

console.groupCollapsed('Challenge 20 - diagonalDifference');
const matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log(diagonalDifference(matrix));
console.groupEnd();

console.groupCollapsed('Challenge 21 - minMaxSum');
console.log(minMaxSum([1, 2, 3, 4, 5]));
console.groupEnd();