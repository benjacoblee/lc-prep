const bst = require("../../binary-search-trees/BinarySearchTreeIterative");

// recursive solution
// const DFSPreOrder = () => {
//     const values = [];
//     const current = bst.root;

//     traverse(current, values);
//     return values;
// };

// const traverse = (node, valuesArr) => {
//     valuesArr.push(node.value);
//     if (node.left) {
//         traverse(node.left, valuesArr);
//     }
//     if (node.right) {
//         traverse(node.right, valuesArr);
//     }
// };

// iterative solution using a stack
const DFSPreOrder = () => {
    const nodeStack = [];
    const values = [];
    let current = bst.root;
    if (!bst.root) return;
    nodeStack.push(current);
    while (nodeStack.length > 0) {
        current = nodeStack.pop();
        values.push(current.value);
        if (current.right) {
            nodeStack.push(current.right);
        }
        if (current.left) {
            nodeStack.push(current.left);
        }
    }

    return values;
};

// visualisation of stack
// [10]
// [15, 6]
// [15, 8, 3]
// [15, 8]
// [15]
// [20]

console.log(DFSPreOrder());
