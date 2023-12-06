// You are climbing a staircase and it takes A steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Top down approach (or) Recursion (or) Memoization
const stairs = (n) => {
    if (n <= 1) return 1;
    if (dp[n] != -1) return dp[n];
    dp[n] = stairs(n - 1) + stairs(n - 2);
    return dp[n];
}
let n = 5;
let dpr = new Array(n + 1).fill(-1);
console.log(stairs(n));

// Buttom up approach (or) Iterative (or) Tabulation
let A = 7;
let dp = [1, 1];
for (let i = 2; i <= A; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
}
console.log(dp[A]);