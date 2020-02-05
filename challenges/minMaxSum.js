/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * For example, . Our minimum sum is  and our maximum sum is . We would print 16 24
 */

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const fourSmallest = arr.slice(0, 4);
  const fourLargest = arr.slice(arr.length - 4, arr.length);
  const smallestSum = fourSmallest.reduce((prev, curr) => prev + curr, 0);
  const largestSum = fourLargest.reduce((prev, curr) => prev + curr, 0);

  return { smallestSum, largestSum };
}

export default miniMaxSum;