/* eslint-disable no-plusplus */
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
// [0,'s',]
function levelWidth(root) {
  const counters = [0];
  const arr = [root, 's'];
  while (arr.length > 1) {
    const top = arr.shift();
    if (top === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...top.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
