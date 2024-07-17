class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insert(val) {
		let node = this.head;
		let newNode = new Node(val);
		if (!node) {
			this.head = newNode;
			return;
		}

		while (node.next) {
			node = node.next;
		}

		node.next = newNode;
		return this;
	}

	insertAtIndex(index, val) {
		let i = 0;
		let node = this.head;
		let newNode = new Node(val);
		if (i === index) {
			newNode.next = node;
			this.head = newNode;
			return;
		}

		if (!node) {
			return;
		}

		while (node.next) {
			i++;

			if (i === index) {
				let next = node.next;
				node.next = newNode;
				newNode.next = next;
				return;
			}

			node = node.next;
		}

		if (index === i + 1) {
			node.next = newNode;
		}
	}

	remove(val) {
		let node = this.head;
		if (!node) {
			return;
		}

		if (node.val === val) {
			if (node.next) {
				this.head = node.next;
			} else {
				this.head = null;
			}
			return;
		}

		if (!node.next) {
			if (node.val === val) {
				this.head = null;
				return;
			}
			return;
		}

		while (node.next) {
			let nextNode = node.next;
			if (nextNode.val === val) {
				if (!nextNode.next) {
					node.next = null;
					return;
				} else {
					node.next = nextNode.next;
					return;
				}
			}
			node = node.next;
		}
	}

	getValues() {
		const data = [];
		let node = this.head;
		if (!node) {
			return data;
		}

		data.push(node.val);
		while (node.next) {
			node = node.next;
			data.push(node.val);
		}

		return data;
	}

	getSize() {
		let node = this.head;
		if (!node) {
			return 0;
		}
		let count = 1;

		while (node.next) {
			node = node.next;
			count++;
		}

		return count;
	}

	includes(val) {
		let node = this.head;
		if (!node) {
			return false;
		}

		if (node.val === val) {
			return true;
		}

		while (node.next) {
			node = node.next;

			if (node.val === val) {
				return true;
			}
		}
		return false;
	}
}
