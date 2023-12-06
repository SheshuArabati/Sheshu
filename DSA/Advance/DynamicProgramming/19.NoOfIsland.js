// Given a matrix of integers with 1 & 0 in each cell.
// 1 -> Land
// 0 -> Water
// A set of connected is Island
// Find the no of Island's in the matrix

const dfs = (mat, vis, i, j) => {
    vis[i][j] = true;
    for (let d = 0; d < 8; d++) {
        let ni = i + dr[d];
        let nj = j + dc[d];
        if ( ni >= 0 && ni < n && nj >= 0 && nj < m && mat[ni][nj] == 1 && vis[ni][nj] == false) {
            dfs(mat, vis, ni, nj);
        }
    }
}

let mat = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1]
]
let n = mat.length;
let m = mat[0].length;
let dr = [-1, -1, -1, 0, 0, 1, 1, 1];
let dc = [-1, 0, 1, -1, 1, -1, 0, 1];
let ans = 0;
let visited = new Array(n).fill().map(() => new Array(m).fill(false));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (visited[i][j] == false && mat[i][j] == 1) {
            ans = ans + 1;
            dfs(mat, visited, i, j);
        }
    }
}
console.log(ans);