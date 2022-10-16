const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

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
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	getUnderlyingList() {
		return this.head
	}

	enqueue(value) {
		let newNode = new ListNode(value)
		if (!this.head || !this.tail) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
	}

	dequeue() {
		let res
		if (this.length !== 0) {
			res = this.head
			this.head = this.head.next
		}
		return res.value
	}
}



// const queue = new Queue()
// queue.enqueue(5)
// queue.enqueue(6)
// queue.enqueue(7)
// queue.dequeue() //5
// queue.dequeue() //6
// const idanigor = new Queue()
// idanigor.enqueue(3)
// idanigor.enqueue(6)
// idanigor.dequeue()
// // idanigor.enqueue(7)

// console.log(JSON.stringify(queue))



module.exports = {
	Queue,
}
