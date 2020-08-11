const bst = require("../../binary-search-trees/BinarySearchTreeIterative");

const DFSInOrder = () => {
    const values = [];
    const current = bst.root;
    traverse(current, values);
    return values;
};

const traverse = (node, valuesArr) => {
    if (node.left) {
        traverse(node.left, valuesArr);
    }
    valuesArr.push(node.value);
    if (node.right) {
        traverse(node.right, valuesArr);
    }
};

console.log(DFSInOrder());
