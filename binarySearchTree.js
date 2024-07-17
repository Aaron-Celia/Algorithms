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

	depthFirstSearch() {
		let node = this.root,
			data = [],
			queue = [];

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) {
				queue.push(node.left);
			} else if (node.right) {
				queue.push(node.right);
			}
		}
		return data;
	}

	find(val) {
		let node = this.root;

		while (node) {
			if (val < node.val) {
				node = node.left;
			} else if (val > node.val) {
				node = node.right;
			} else {
				return node;
			}
		}
		return null;
	}

	getRoot() {
		return this.root;
	}

	inOrderTraversal(node) {
		const data = [];
		const traverse = (node) => {
			if (node) {
				traverse(node.left);
				data.push(node.val);
				traverse(node.right);
			}
		};
		traverse(node);
		return data;
	}

	preOrderTraversal(node) {
		const data = [];

		const traverse = (node) => {
			if (node) {
				data.push(node.val);
				traverse(node.left);
				traverse(node.right);
			}
		};
		traverse(node);
		return data;
	}

	postOrderTraversal(node) {
		const data = [];

		const traverse = (node) => {
			if (node) {
				traverse(node.left);
				traverse(node.right);
				data.push(node.val);
			}
		};
		traverse(node);
		return data;
	}
}
