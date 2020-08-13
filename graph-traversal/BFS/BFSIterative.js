const g = require("../../graphs/Graph");

function BFS(start, adjacencyList) {
    const queue = [start];
    const results = [];
    const visited = {};
    visited[start] = true;
    let currVertex;

    while (queue.length) {
        currVertex = queue.shift();
        results.push(currVertex);
        adjacencyList[currVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }

    return results;
}

console.log(BFS("A", g.adjacencyList));
