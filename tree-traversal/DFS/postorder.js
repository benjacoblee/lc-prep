const bst = require("../../binary-search-trees/BinarySearchTreeIterative");

const DFSPostOrder = () => {
    const values = [];
    const current = bst.root;
    traverse(current, values);
    return values;
};

const traverse = (node, valuesArr) => {
    if (node.left) {
        traverse(node.left, valuesArr);
    }
    if (node.right) {
        traverse(node.right, valuesArr);
    }
    valuesArr.push(node.value);
};

console.log(DFSPostOrder());
