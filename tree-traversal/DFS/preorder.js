const bst = require("../../binary-search-trees/BinarySearchTreeIterative");

const DFSPreOrder = () => {
    const values = [];
    const current = bst.root;

    traverse(current, values);
    return values;
};

const traverse = (node, valuesArr) => {
    valuesArr.push(node.value);
    if (node.left) {
        traverse(node.left, valuesArr);
    }
    if (node.right) {
        traverse(node.right, valuesArr);
    }
};

console.log(DFSPreOrder());
