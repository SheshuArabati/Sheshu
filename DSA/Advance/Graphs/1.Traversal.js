// Travel the complete graph

const dfs = (graph, vis, i) => {
    console.log(i);
    vis[i] = true;
    for (let j of graph[i]) {
        if (!vis[j]) {
            dfs(graph, vis, j);
        }
    }
}

let arr = [[0, 1], [0, 2], [1, 2], [2, 3], [3, 1]];
let nodes = 4;
let edges = 5;
let graph = new Array(nodes).fill().map(() => new Array());
let visited = new Array(nodes).fill(false);
for (let i = 0; i < arr.length; i++) {
    let node1 = arr[i][0];
    let node2 = arr[i][1];
    graph[node1].push(node2);
}
for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
        dfs(graph, visited, i);
    }
}