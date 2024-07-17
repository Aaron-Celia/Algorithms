class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let node = this.root;
		let newNode = new Node(val);
		if (!node) {
			this.root = newNode;
			return;
		}

		while (true) {
			if (newNode.val < node.val) {
				if (!node.left) {
					node.left = newNode;
					return;
				}
				node = node.left;
			} else {
				if (!node.right) {
					node.right = newNode;
					return;
				}
				node = node.right;
			}
		}
	}

	breadthFirstSearch() {
		let node = this.root,
			data = [],
			queue = [];

		if (!node) {
			return data;
		}

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}

		return data;
	}
}
