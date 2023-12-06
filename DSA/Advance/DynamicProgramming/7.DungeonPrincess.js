// Find the min health level to start with so that you can save princess. (Microsoft, Google, Amazon)
// If health level decreases to 0 or less then you gonna die.

let mat = [
    [-3, 2, 4, -5],
    [-6, 5, -4, 6],
    [-15, -7, 5, -2],
    [2, 10, -3, -4]
]
let n = mat.length;
let m = mat[0].length;
// Top down approach (or) Recursion (or) Memoization
const save = (mat, i, j) => {
    if (i == m - 1 && j == n - 1) {
        if (mat[i][j] < 0) {
            return Math.abs(mat[i][j]) + 1;
        } else {
            return 1;
        }
    }
    if (dpr[i][j] != -1) return dpr[i][j];
    let f1 = 0;
    let f2 = 0;
    if (i != m - 1) f1 = save(mat, i + 1, j);
    if (j != n - 1) f2 = save(mat, i, j + 1);
    dpr[i][j] = Math.max(1, Math.min(f1, f2) - mat[i][j]);
    return dpr[i][j];
}
let dpr = new Array(m).fill().map(() => new Array(n).fill(-1));
console.log(save(mat, 0, 0));

// Buttom up approach (or) Iterative (or) Tabulation
let dp = new Array(n).fill().map(() => new Array(m).fill([]));
dp[n - 1][m - 1] = mat[n - 1][m - 1] > 0 ? 1 : Math.abs(mat[n - 1][m - 1]) + 1;
for (let i = n - 2; i >= 0; i--) {
    dp[i][m - 1] = Math.max(1, dp[i + 1][m - 1] - mat[i][m - 1]);
}
for (let j = m - 2; j >= 0; j--) {
    dp[n - 1][j] = Math.max(1, dp[n - 1][j + 1] - mat[n - 1][j]);
}
for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
        dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - mat[i][j]);
    }
}
console.log(dp[0][0]);