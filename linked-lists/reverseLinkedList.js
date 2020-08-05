let linkedList = require("./linked-list");

function reverseLinkedList(linkedList) {
    let node = linkedList.head;
    let previous = null;

    while (node !== null) {
        let tmp = node.next;
        node.next = previous;
        previous = node;
        node = tmp;
    }

    return previous;
}

linkedList = reverseLinkedList(linkedList);
console.log(linkedList);
