class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	getIndex(index) {
		if (!this.head) return null;
		let node = this.head;
		let i = 0;
		while (node) {
			if (i === index) return node;
			node = node.next;
			i++;
		}
		return null;
	}

	insert(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
	}

	insertAtIndex(index, val) {
		let newNode = new Node(val);
		if (index === 0) {
			if (!this.head) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				newNode.next = this.head;
				this.head.prev = newNode;
				this.head = newNode;
			}
			return;
		}
		let node = this.getIndex(index - 1);
		if (!node) return;
		newNode.next = node.next;
		newNode.prev = node;
		if (node.next) {
			node.next.prev = newNode;
		} else {
			this.tail = newNode;
		}
		node.next = newNode;
	}

	remove(val) {
		if (!this.head) {
			return;
		}

		let node = this.head;

		if (node.val === val) {
			if (!node.next) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = node.next;
				this.head.prev = null;
			}
			return;
		}

		while (node.next) {
			if (node.next.val === val) {
				let toRemove = node.next;
				node.next = toRemove.next;
				if (toRemove.next) {
					toRemove.next.prev = node;
				} else {
					this.tail = node;
				}
				return;
			}
			node = node.next;
		}
	}

	getValues() {
		const data = [];
		let node = this.head;
		while (node) {
			data.push(node.val);
			node = node.next;
		}
		return data;
	}
}
