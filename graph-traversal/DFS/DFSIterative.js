const g = require("../../graphs/Graph");

function DFSIterative(start, adjacencyList) {
    const stack = [start];
    const results = [];
    const visited = {};
    let currVertex;
    visited[start] = true;

    while (stack.length) {
        currVertex = stack.pop();
        results.push(currVertex);
        adjacencyList[currVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        });
    }

    return results;
}

console.log(DFSIterative("A", g.adjacencyList));
