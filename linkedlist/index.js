/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newHead = new Node(data, this.head);
    this.head = newHead;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    const newHead = this.head.next;
    this.head = newHead;
  }

  removeLast() {
    let prevNode = null;
    let currNode = this.head;
    if (currNode && !currNode.next) {
      this.head = null;
    }
    while (currNode && currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (prevNode) prevNode.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (!this.head.next) {
      this.head.next = newNode;
      return;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
  }

  getAt(index) {
    if (index === 0) {
      return this.head;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  // a->b->c
  // a
  //
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    }

    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }

  forEach(fn) {
    let counter = 0;
    let currNode = this.head;
    while (currNode) {
      fn(currNode, counter);
      currNode = currNode.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
