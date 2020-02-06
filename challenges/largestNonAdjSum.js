/**
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * Follow-up: Can you do this in O(N) time and constant space?
 */

const largestSumNonAdjacentNumbers = (arr) => {
  let prevInclusive = 0;
  let prevExclusive = 0;
  
  for(let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const temp = prevInclusive;

    prevInclusive = Math.max((prevExclusive + current), prevInclusive);
    prevExclusive = temp;
  }
  
  return Math.max(prevExclusive, prevInclusive);
};

export default largestSumNonAdjacentNumbers;
