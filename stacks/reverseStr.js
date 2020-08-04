const Stack = require("./stack");
console.log(Stack);

function reverseStr(str) {
    let stack = new Stack();
    for (char of str) {
        stack.push(char);
    }
    let rev = "";
    while (!stack.isEmpty()) {
        rev += stack.pop();
    }

    return rev;
}

console.log(reverseStr("Hello!"));
