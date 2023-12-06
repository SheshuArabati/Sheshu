// Given an arr, calculate max subsequence sum.
// Note-1: In a subsequence 2 adjacent elements can't be picked.
// Note-2: Empty subseq is also valid.

// Top down approach (or) Recursion (or) Memoization
const maxSum = (A, i) => {
    if (i >= A.length) return 0;
    if (dpr[i] != -1) return dp[i];
    dpr[i] = Math.max(maxSum(A, i + 1), maxSum(A, i + 2) + A[i]);
    return dpr[i];
}
let A = [9, 4, 13, 24];
let dpr = new Array(A.length).fill(-1);
console.log(maxSum(A, 0));

// Buttom up approach (or) Iterative (or) Tabulation
let arr = [9, 4, 13, 24];
let dp = [0, 0];
for (let i = 0; i < arr.length; i++) {
    dp[i + 2] = Math.max(dp[i + 1], arr[i] + dp[i]);
}
console.log(dp[dp.length - 1]);