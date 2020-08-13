const bst = require("../../binary-search-trees/BinarySearchTreeIterative");

// const DFSPostOrder = () => {
//     const values = [];
//     const current = bst.root;
//     traverse(current, values);
//     return values;
// };

// const traverse = (node, valuesArr) => {
//     if (node.left) {
//         traverse(node.left, valuesArr);
//     }
//     if (node.right) {
//         traverse(node.right, valuesArr);
//     }
//     valuesArr.push(node.value);
// };

const DFSPostOrder = () => {
    const firstStack = [];
    const secondStack = [];
    let current = bst.root;
    firstStack.push(current);
    while (firstStack.length > 0) {
        current = firstStack.pop();
        secondStack.push(current.value);
        if (current.left) firstStack.push(current.left);
        if (current.right) firstStack.push(current.right);
    }

    return secondStack.reverse();
};

console.log(DFSPostOrder());
