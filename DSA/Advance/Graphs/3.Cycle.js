// Check if gievn directed graph has cycle or not.

const dfs = (graph, vis, path, i) => {
    vis[i] = true;
    path[i] = true;
    for (let nbr of graph[i]) {
        if (path[nbr]) return true;
        if (!vis[nbr]) {
            let ans = dfs(graph, vis, path, nbr);
            if (ans) return true;
        }
    }
    path[i] = false;
    return false;
}

let A = 5;
let B = [[1, 2], [4, 1], [2, 4], [3, 4], [5, 2], [1, 3]];
let graph = new Array(A + 1).fill().map(() => new Array());
let visited = new Array(A + 1).fill(false);
let path = new Array(A + 1).fill(false);
for (let i = 0; i < B.length; i++) {
    let fromNode = B[i][0];
    let toNode = B[i][1];
    graph[fromNode].push(toNode);
}
let isCycle = false;
for (let i = 1; i < visited.length; i++) {
    if (!visited[i])  {
        if (dfs(graph, visited, path, i)) {
            isCycle = true;
            break;
        }
    }
}
console.log(isCycle);