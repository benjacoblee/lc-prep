class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(record) {
        let node = new Node(record);
        if (!this.head) {
            // in the case where there's no head, the inserted node is both the head and the tail
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail; // the newest inserted node's previous element is whatever resides at the tail
            this.tail.next = node; // updates the tail's next property and changes the value
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        if (!this.head) return null;

        const prevNode = this.tail.prev; // get a reference to the node just before the last node
        if (prevNode) {
            prevNode.next = null; // remove the last node
            this.tail = prevNode; // update tail
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
    }

    insertBeginning(record) {
        let node = new Node(record);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node; // whatever is at the head, it's previous property is the newest inserted node
            node.next = this.head; // update whatever is current at the head to be the next node, update the head
            this.head = node;
        }
        this.length++;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }
        const node = this.head.next;
        if (node) {
            node.prev = null;
            this.head = node;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.insertBeginning(0);
console.log(doublyLinkedList);
