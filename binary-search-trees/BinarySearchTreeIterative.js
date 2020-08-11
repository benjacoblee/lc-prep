class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) {
                    return undefined;
                }
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        // let current = this.root;
        // if (!current) return false;
        // while (true) {
        //     if (!current) return false;
        //     if (value === current.value) return current;
        //     if (value < current.value) {
        //         current = current.left;
        //     } else if (value > current.value) {
        //         current = current.right;
        //     }
        // }

        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
module.exports = bst;
// console.log(bst.find(7));
// console.log(bst.BFS());
// console.log(bst);
