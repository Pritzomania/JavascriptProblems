/* eslint-disable no-restricted-syntax */
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function buildCharMap(str) {
//   const charMap = {};
//   for (const char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const cleanedStrA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const cleanedStrB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   const stringAMap = buildCharMap(cleanedStrA);
//   const stringBMap = buildCharMap(cleanedStrB);
//   console.log(stringAMap);
//   console.log(stringBMap);

//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
//     return false;
//   for (const char in stringAMap) {
//     if (stringAMap[char] !== stringBMap[char]) return false;
//   }

//   return true;
// }

function anagrams(stringA, stringB) {
  const cleanedStrA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const cleanedStrB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return cleanedStrA === cleanedStrB;
}

module.exports = anagrams;
