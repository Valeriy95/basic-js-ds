const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor (value) {
    this.value = value;
    this.next = null;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    
    if(this.value === undefined) {
      this.value = new Queue(value);
    } else {
      let currentNode = this.value;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Queue(value);
    }
  }

  dequeue() {
    let currentNode = this.value;
    let deleteNode = this.value.value;
    this.value = currentNode.next;
    return deleteNode;
  }
}

module.exports = {
  Queue
};
