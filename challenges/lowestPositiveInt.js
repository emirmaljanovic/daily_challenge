/*
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 */

function lowestPositiveInt(arr) {
  arr.sort((a, b) => a - b);
  let res;
  
  for (let i = 0; i < arr.length; i++) {
    /*
     * Condition:
     * - if num is greater than 0; we don't look for first missing negative number
     * - if current number and next number are different; so we can avoid repeating number issue
     * - if next number is NOT current number + 1, i.e. what is expeceted
     */
    if (arr[i] > 0 && arr[i] !== arr[i + 1] && arr[i] + 1 !== arr[i + 1]) {
      res = arr[i] + 1;
      break;
    }
  }

  return res;
}

export default lowestPositiveInt;