// Rat in a maze
// Check if it is possible to go from top-lft to bottom-right cell in a maze with blocked cell

const findPath = (mat, i, j) => {
    if (i == n - 1 && j == m - 1) return true;
    if (i == n - 1) {
        for (let k = j; k < m; k++) {
            if (mat[i][k] == 1) return false;
        }
        return true;
    }
    if (j == m - 1) {
        for (let k = i; k < m; k++) {
            if (mat[k][j] == 1) return false;
        }
        return true;
    }
    if (mat[i][j] == 1) return false;
    if (dp[i][j] != -1) return dp[i][j];
    let val1 = findPath(mat, i + 1, j);
    let val2 = findPath(mat, i, j + 1);
    if (val1 || val2) dp[i][j] = true;
    else dp[i][j] = false;
    return dp[i][j];
}

let mat = [
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 0, 0]
]
let n = mat.length;
let m = mat[0].length;
let dp = new Array(n).fill().map(() => new Array(m).fill(-1));
console.log(findPath(mat, 0, 0));