const g = require("../../graphs/Graph");

function DFSRecursive(start, adjacencyList) {
    const results = [];
    const visited = {};

    const DFS = (vertex) => {
        if (!vertex) return null;
        visited[vertex] = true;
        results.push(vertex);

        adjacencyList[vertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                return DFS(neighbor);
            }
        });
    };

    DFS(start);

    return results;
}

console.log(DFSRecursive("A", g.adjacencyList));
