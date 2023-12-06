// Level order traversal

const bfs = (graph, vis, i) => {
    let queue = [i];
    vis[i] = true;
    while(queue.length) {
        let ele = queue.shift();
        console.log(ele);
        for (let j = 0; j < graph[ele].length; j++) {
            let nbr = graph[ele][j];
            if (!vis[nbr]) {
                queue.push(nbr);
                vis[nbr] = true;
            }
        }
    }
}

let arr = [[0, 1], [0, 2], [1, 2], [2, 3], [3, 1]];
let nodes = 4;
let edges = 5;
let graph = new Array(nodes).fill().map(() => new Array());
let visited = new Array(nodes).fill(false);
for (let i = 0; i < arr.length; i++) {
    let fromNode = arr[i][0];
    let toNode = arr[i][1];
    graph[fromNode].push(toNode);
}
for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
        bfs(graph, visited, i);
    }
}
console.log(visited);