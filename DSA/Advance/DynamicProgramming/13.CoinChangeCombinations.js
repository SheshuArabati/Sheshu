// Coin change combinations

let n = 5;
let arr = [3, 1, 4];
let dp = new Array(n + 1).fill(0);
dp[0] = 1;
for (let j = 0; j < arr.length; j++) {
    for (let i = 1; i <= n; i++) {
        if (arr[j] <= i) {
            dp[i] = dp[i] + dp[i - arr[j]];
        }
    }
}
console.log(dp[n]);