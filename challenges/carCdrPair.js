/*
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
 * For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 * Given this implementation of cons:
 * function cons(a, b) {
 *  function pair(f) {
 *     return f(a, b);
 *   }
 *   return pair;   
 * }
 * Implement car and cdr.
*/

export function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }

  return pair;
}

export function car(fn) {
  function left(a, b) {
    return a;
  }
  
  return fn(left);
}

export function cdr(fn) {
  function right(a, b) {
    return b;
  }

  return fn(right);
}
