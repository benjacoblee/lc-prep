class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.data.length; i++) {
            str += this.data[i] + " ";
        }
        return str;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
// console.log(stack.printStack());
// console.log(stack.isEmpty());
stack.pop();
// console.log(stack.printStack());

module.exports = Stack;
