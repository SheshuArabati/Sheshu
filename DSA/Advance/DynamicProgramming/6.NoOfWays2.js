// Number of ways to go from (0, 0) -> BR cell in mat[n][m] (AMazon, Vmware)
// Note: From cell we can go to right or down
// Note: Certain cells contains 0, indicates blocked cell, we can't travel to that path

let mat = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 1, 1]
]
let n = mat.length;
let m = mat[0].length;

// Top down approach (or) Recursion (or) Memoization
const ways = (i, j) => {
    if (i == 0 && j == 0) return 1;
    if (i < 0 || j < 0 || mat[i][j] == 0) return 0;
    if (dpr[i][j] != -1) return dpr[i][j];
    dpr[i][r] = ways(i, j - 1) + ways(i - 1, j);
    return dpr[i][j];
}
let dpr = new Array(m).fill().map(() => new Array(n).fill(-1));
console.log(ways(m - 1, n - 1));

// Buttom up approach (or) Iterative (or) Tabulation
let dp = new Array(n).fill().map(() => new Array(m).fill([]));
for (let i = 0; i < n; i++) {
    if (mat[i][0] == 0) {
        while (i < n) {
            dp[i][0] = 0;
            i++;
        }
    } else {
        dp[i][0] = 1;
    }
}
for (let j = 0; j < m; j++) {
    if (mat[0][j] == 0) {
        while (j < m) {
            dp[0][j] = 0;
            j++;
        }
    } else {
        dp[0][j] = 1;
    }
}
for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
        if (mat[i][j] == 0) {
            dp[i][j] = 0;
        } else {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
}
console.log(dp[n - 1][m - 1]);