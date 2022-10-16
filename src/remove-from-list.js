const { NotImplementedError } = require('../extensions/index.js')

//const { ListNode } = require('../extensions/list-node.js')

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// const linkListObj = {
// 	value: 3,
// 	next: {
// 		value: 1,
// 		next: {
// 			value: 2,
// 			next: { value: 3, next: { value: 4, next: { value: 5, next: null } } },
// 		},
// 	},
// }

function removeKFromList(l, k) {
	// let arr = []
	// let obj = {}
	// function getProp(o, k) {
	// 	for (let prop in o) {
	// 		if (typeof o[prop] === 'object') {
	// 			getProp(o[prop], k)
	// 		} else {
	// 			if (o[prop] !== k) {
	// 				arr.push(o[prop])
	// 			}
	// 		}
	// 	}
	// }
	// getProp(l, k)
	// function getList() {
	// 	let current = obj
	// 	for (let i = 0; i < arr.length; i++) {
	// 		current.value = arr[i]
	// 		if (i === arr.length - 1) {
	// 			current.next = null
	// 		} else {
	// 			current.next = {}
	// 			current = current.next
	// 		}
	// 	}
	// 	return obj
	// }
	// getList()
	// return obj

	let current = l
	let prev = null

	while (current) {
		if (current.value === k) {
			if (prev) {
				prev.next = current.next
			} else {
				l = current.next
			}
			current = l.next
		} else {
			prev = current
			current = current.next
		}
	}

	return l
}

//console.log(JSON.stringify(removeKFromList(linkListObj, 3)))

module.exports = {
	removeKFromList,
}
