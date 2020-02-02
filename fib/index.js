/* eslint-disable no-plusplus */
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const seq = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     seq[i] = seq[i - 1] + seq[i - 2];
//   }
//   return seq[n];
// }

// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      console.log(cache);
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

function slowfib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowfib);

console.log(fib(10));

module.exports = fib;
