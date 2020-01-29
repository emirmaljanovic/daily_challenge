/*
 * Challenge
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
*/

function addNumbers(list, k) {
  list.sort((a, b) => a - b);

  for (let i = 0, j = list.length - 1; i < j;) {
    let sum = list[i] + list[j];

    if(sum < k) {
      i++;
    } else if (sum > k) {
      j--;
    } else {
      return true;
    }
  }
  
  return false;
}

export default addNumbers;
