/**
 * Challenge:
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * It must return an integer representing the absolute diagonal difference. diagonalDifference takes the following parameter: arr: an array of integers.
 * Sample input:
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 * Sample output:
 * 15
 */

function diagonalDifference(arr) {
  function addDiagonaly(mode = 'ltr') {
    let res = 0;

    for (let i = 0, j = mode === 'ltr' ? 0 : arr[i].length - 1; i < arr.length; i++) {
      res += arr[i][j];

      j = mode === 'ltr' ? j + 1 : j - 1;
    }

    return res;
  }

  const firstDiagonalSum = addDiagonaly();
  const secondDiagonalSum = addDiagonaly('rtl');

  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

export default diagonalDifference;