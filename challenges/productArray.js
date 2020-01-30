/**
 * Challenge
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * Follow-up: what if you can't use division?
 */

function productArray(arr) {
  let mult = arr.reduce((acc, num) => acc * num, 1);
  
  return arr.map(item => mult / item);
  
  // return arr.map((item, index) => arr.reduce((acc, num, ind) => acc * (index !== ind ? num : 1), 1));
}

export default productArray;