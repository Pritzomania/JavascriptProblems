// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const signMul = Math.sign(n);
  const revNumStr = n
    .toString()
    .split('')
    .reverse()
    .join('');
  console.log(revNumStr);
  return parseInt(revNumStr) * signMul;
}

module.exports = reverseInt;
