class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = this.root;

        if (!node) {
            this.root = new Node(value);
        } else {
            const searchTree = (node) => {
                if (value < node.data) {
                    if (!node.left) {
                        node.left = new Node(value);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                } else if (value > node.data) {
                    if (!node.right) {
                        node.right = new Node(value);
                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let node = this.root;
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    findMax() {
        let node = this.root;
        while (node.right) {
            node = node.right;
        }

        return node;
    }

    isPresent(value) {
        let current = this.root;
        while (current) {
            if (value < current.data) {
                current = current.left;
            } else if (value > current.data) {
                current = current.right;
            }
            if (value === current.data) {
                return true;
            }
        }
        return false;
    }

    remove(value) {
        const removeNode = (node, value) => {
            if (!node) {
                return null;
            }

            if (value === node.data) {
                if (node.left === null && node.right === null) {
                    return null;
                }

                if (node.left === null) {
                    return node.right;
                }

                if (node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.data) {
                node.left = removeNode(node.left, value);
                return node;
            } else {
                node.right = removeNode(node.right, value);
                return node;
            }
        };

        this.root = removeNode(this.root, value);
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(10);
binarySearchTree.insert(1);
binarySearchTree.insert(7);
console.log(binarySearchTree.root);
console.log(binarySearchTree.findMin());
console.log(binarySearchTree.findMax());
console.log(binarySearchTree.isPresent(7));
binarySearchTree.remove(10);
console.log(binarySearchTree.findMax());
