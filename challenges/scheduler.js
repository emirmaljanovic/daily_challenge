/*
 * Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

function scheduler(f, n) {
  const context = this;
  const args = arguments;
  
  setTimeout(() => f.apply(context, args), n);
}

export default scheduler;
