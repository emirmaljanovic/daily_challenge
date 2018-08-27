/**
 * Challenge
 * 
 * Using the JavaScript language, have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and determine the area of the largest 
 * square submatrix that contains all 1's. A square submatrix is one of equal width and height, and your program should return the area of the largest submatrix that contains only 1's.
 * For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 *
 * For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2, so your program should return the area which is 4.
 * You can assume the input will not be empty. 
 */
 
const flattenDeep = arr1 =>
  arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);

const createEmptySubMatrix = matrix => {
  const subMatrix = new Array(matrix.length + 1);

  for (let i = 0; i < subMatrix.length; i++) {
    subMatrix[i] = new Array(matrix[0].length + 1).fill(0);
  }

  return subMatrix;
};

/**
 *
 * 0 1 1 1       0 0 0 0 0
 * 1 1 1 1  ---  0 0 1 1 1
 * 1 1 1 1  ---  0 1 1 2 2
 * 1 1 1 1       0 1 2 2 3
 *               0 1 2 3 3
 */
const maximalSquare = (...args) => {
  const matrix = args.map(item => item.split(''));
  const subMatrix = createEmptySubMatrix(matrix);

  for(let i = 0; i <= matrix.length - 1; i++) {
   for(let j = 0; j <= matrix[i].length - 1; j++) {
     if (matrix[i][j] === '0') {
       subMatrix[i + 1][j + 1] = 0;
     } else {
       const prev = subMatrix[i + 1][j];
       const diagonal = subMatrix[i][j];
       const top = subMatrix[i][j + 1];

       if (prev !== undefined && diagonal !== undefined && top !== undefined) {
         const newVal = Math.min(prev, diagonal, top) + 1;

         subMatrix[i + 1][j + 1] = newVal;
       }
     }
   }
  }

  const maxMatrix = Math.max(...flattenDeep(subMatrix));
  
  return Math.pow(maxMatrix, 2);
};

console.groupCollapsed('Challenge 13 - maximalSquare');
console.log(maximalSquare('10100', '10111', '11111', '10010'), maximalSquare('10100', '10111', '11111', '10010') === 4);
console.log(maximalSquare('0111', '1111', '1111', '1111'), maximalSquare('0111', '1111', '1111', '1111') === 9);
console.log(maximalSquare('0111', '1101', '0111'), maximalSquare('0111', '1101', '0111') === 1);
