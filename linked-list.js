/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head && this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    const value = this.tail.val;
    if (this.length > 1) {
      this.tail.prev.next = null;
    }
    this.tail = this.tail.prev;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return value;
  }

  /** shift(): return & remove first item. */

  shift() {
    const value = this.head.val;
    if (this.length > 1) {
      this.head.next.prev = null;
    }
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return value;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i !== idx) {
        currentNode = currentNode.next;
      } else {
        return currentNode.val;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i !== idx) {
        currentNode = currentNode.next;
      } else {
        currentNode.val = val;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(val);
    newNode.prev = currentNode.prev;
    newNode.next = currentNode;
    currentNode.prev.next = newNode;
    currentNode.prev = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      const val = this.head.val;
      this.shift();
      return val;
    }

    if (idx === this.length - 1) {
      const val = this.tail.val;
      this.pop();
      return val;
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    this.length -= 1;
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return total === 0 ? total : total / this.length;
  }
}

module.exports = LinkedList;
