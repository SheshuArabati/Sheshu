// Number of ways to go from (0, 0) -> BR cell in mat[n][m]

// Top down approach (or) Recursion (or) Memoization
const ways = (i, j) => {
    if (i == 0 && j == 0) return 1;
    if (i < 0 || j < 0) return 0;
    if (dpr[i][j] != -1) return dpr[i][j];
    dpr[i][j] = ways(i - 1, j) + ways(i, j - 1);
    return dpr[i][j];
}
let n1 = 3;
let m1 = 3;
let dpr = new Array(m1).fill().map(() => new Array(n1).fill(-1));
console.log(ways(m1 - 1, n1 - 1));

// Buttom up approach (or) Iterative (or) Tabulation
let n = 3;
let m = 3;
let dp = new Array(n).fill().map(() => new Array(m).fill([]));
for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
}
for (let j = 0; j < m; j++) {
    dp[0][j] = 1;
}
for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
}
console.log(dp[n - 1][m - 1]);