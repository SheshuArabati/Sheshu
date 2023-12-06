// Find the Ath Fibonacci number

// Top down approach (or) Recursion (or) Memoization
const fib = (n) => {
    if (n <= 1) return n;
    if (dpr[n] != -1) return dpr[n];
    dpr[n] = fib(n - 1) + fib(n - 2);
    return dpr[n];
}

let n = 7;
let dpr = new Array(n + 1).fill(-1);
console.log(fib(n));

// Buttom up approach (or) Iterative (or) Tabulation
let A = 7;
let dp = [0, 1];
for (let i = 2; i <= A; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
}
console.log(dp[A]);