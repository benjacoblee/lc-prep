class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(record) {
        let node = new Node(record);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            node.next = this.head;
        } else {
            this.tail.next = node;
            node.next = this.head;
        }
        this.length++;
    }

    getLast() {
        let node = this.head;
        if (!node) return null;
        while (node.next !== this.head) {
            node = node.next;
        }
        return node;
    }
}

let circularLinkedList = new CircularLinkedList();
circularLinkedList.push(1);
circularLinkedList.push(2);
circularLinkedList.push(3);
circularLinkedList.push(4);
circularLinkedList.push(5);
console.log(circularLinkedList.getLast());
