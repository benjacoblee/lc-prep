const bst = require("../../binary-search-trees/BinarySearchTreeIterative");

// recursive solution
// const DFSInOrder = () => {
//     const values = [];
//     const current = bst.root;
//     traverse(current, values);
//     return values;
// };

// const traverse = (node, valuesArr) => {
//     if (node.left) {
//         traverse(node.left, valuesArr);
//     }
//     valuesArr.push(node.value);
//     if (node.right) {
//         traverse(node.right, valuesArr);
//     }
// };

// iterative solution using a stack
const DFSInOrder = () => {
    const nodeStack = [];
    const values = [];
    let current = bst.root;

    while (true) {
        if (current) {
            nodeStack.push(current);
            current = current.left;
        } else if (nodeStack.length > 0) {
            current = nodeStack.pop();
            values.push(current.value);
            current = current.right;
        } else return values;
    }
};

// visualisation of stack
// [10]
// [10, 6]
// [10, 6, 3]
// [10, 6]
// [10, 8]
// [10]
// [15]
// [20]

console.log(DFSInOrder());
