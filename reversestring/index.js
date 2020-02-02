/* eslint-disable no-plusplus */
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((acc, curr) => curr + acc, '');
}

reverse('abcd');

module.exports = reverse;

// function reverse(str) {
//   let reversed = '';
//   for (const char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   const newStr = [];
//   for (let i = 0; i < str.length; i++) {
//     newStr.unshift(str[i]);
//   }
//   return newStr.join('');
// }

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
