/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let maxCount = 0;
  let maxCharac = '';

  for (const char of str) {
    // if (!obj[char]) {
    //   obj[char] = 1;
    // } else {
    //   obj[char]++;
    // }
    // obj[char] = obj[char] ? obj[char] + 1 : 1;
    obj[char] = obj[char] + 1 || 1;
  }
  console.log(obj);
  for (const item in obj) {
    if (obj[item] > maxCount) {
      maxCharac = item;
      maxCount = obj[item];
    }
  }
  return maxCharac;
}

module.exports = maxChar;
