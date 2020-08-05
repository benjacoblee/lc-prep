class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insert(record) {
        let node = this.head;
        if (!node) {
            this.head = new Node(record);
        } else {
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node(record);
        }
    }

    find(value) {
        let node = this.head;
        if (!node) {
            return null;
        }

        while (node) {
            if (node.value === value) return node;
            node = node.next;
        }

        return node;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        while (lastNode && lastNode.next !== null) {
            lastNode = lastNode.next;
        }

        return lastNode;
    }

    delete(value) {
        let node = this.head;
        let prev;
        if (!node) return null;
        while (node) {
            if (node.value === value) {
                console.log("FOUND!!!");
                prev.next = node.next;
                break;
            }
            prev = node;
            node = node.next;
        }
    }
}

let myNode = new Node("First node!");
let secondNode = new Node("Second");
myNode.next = secondNode;
let myLinkedList = new LinkedList(myNode);
// console.log(myLinkedList);
// console.log(myLinkedList.size());
myLinkedList.clear();
// console.log(myLinkedList);
myLinkedList.insert(1);
myLinkedList.insert(2);
myLinkedList.insert(3);
myLinkedList.insert(9);
myLinkedList.delete(3);
// console.log(myLinkedList);
// console.log(myLinkedList.size());
// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.find(9));

module.exports = myLinkedList;
