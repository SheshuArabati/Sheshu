// Given a rod of length N and an array of length N.
// A[i] -> price of i length rod
// Find the maximum value we can obtain by selling the rod
// Note: We can sell the rod in pieces

let n = 5;
let arr = [0, 1, 4, 2, 5, 6];
let dp = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], arr[j] + dp[i - j]);
    }
}
console.log(dp[n]);