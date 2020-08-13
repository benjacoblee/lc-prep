const bst = require("../../binary-search-trees/BinarySearchTreeIterative");

const bfs = (tree) => {
    let node = tree.root;
    const queue = [];
    const visited = [];
    queue.push(node);
    while (queue.length > 0) {
        node = queue.shift();
        visited.push(node.value);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return visited;
};

console.log(bfs(bst));
