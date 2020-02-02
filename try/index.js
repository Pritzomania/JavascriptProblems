/* eslint-disable no-unused-expressions */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-plusplus */

// BST

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(data) {
    const newNode = new Node(data);
    this.count++;
    const traverse = node => {
      // when there is no nodes in the BST
      if (!node) {
        this.root = newNode;
      } else if (data < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          traverse(node.left);
        }
      } else if (data > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          traverse(node.right);
        }
      }
    };
    traverse(this.root);
  }

  remove(data) {
    const smallestRightNode = node => {
      while (node.left) {
        node = node.left;
      }
      return node;
    };
    const deleteNode = node => {
      if (!node) return null;
      if (data < node.value) {
        node.left = node.left && deleteNode(node.left);
        return node;
      }
      if (data > node.value) {
        node.right = node.right && deleteNode(node.right);
        return node;
      }
      if (data === node.value) {
        this.count--;
        if (!node.left && !node.right) {
          console.log('I am here', node);
          node = null;
          return node;
        }
        if (!node.left || !node.right) {
          if (node.left) {
            node = node.left;
            return node;
          }
          if (node.right) {
            node = node.right;
            return node;
          }
        }
        if (node.left && node.right) {
          const replacer = smallestRightNode(node);
          node.value = replacer.value;
          node.right = deleteNode(node.right);
          return node;
        }
      }
    };
    deleteNode(this.root);
  }

  dfs() {
    // left,root,right
    const result = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  bfs() {
    // left,root,right
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      const top = queue.shift();
      result.push(top.value);
      if (top.left) {
        queue.push(top.left);
      }
      if (top.right) {
        queue.push(top.right);
      }
    }
    return result;
  }
}

const bst = new BST();
console.log(bst);
bst.insert(6);
bst.insert(5);
bst.insert(7);
bst.insert(8);

// console.log(bst);
console.log(bst.dfs());
bst.remove(8);
console.log(bst.bfs());

// bst.remove(5);
// bst.remove(6);

// fib with memo

// function fib(n) {
//   const seq = [0, 1];
//   for (let i = 2; i < n; i++) {
//     seq[i] = seq[i - 1] + seq[i - 2];
//   }
//   return seq;
// }

// function slowfib(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return slowfib(n - 1) + slowfib(n - 2);
// }

// function cachify(fn) {
//   const cache = {};

//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//     cache[args] = fn(...args);
//     return cache[args];
//   };
// }

// const fib = cachify(slowfib);

// console.log(fib(3000));

// chunk

// function chunkify(list, size) {
//   const result = [];
//   let index = 0;
//   while (index < list.length) {
//     result.push(list.slice(index, index + size));
//     index += size;
//   }

//   return result;
// }

// console.log(chunkify([1, 2, 3, 4, 5], 2));

// events

// class EventMechanism {
//   constructor() {
//     this.events = {};
//   }

//   on(event, callback) {
//     if (!this.events[event]) {
//       this.events[event] = [callback];
//     } else {
//       this.events[event].push(callback);
//     }
//   }

//   off(event) {
//     delete this.events[event];
//   }

//   execute(event) {
//     if (this.events[event]) {
//       for (const cb of this.events.event) {
//         cb();
//       }
//     }
//   }
// }
