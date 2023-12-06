// In how many ways, can sum be equal to N by using coins given in the array.
// One coin can be used multiple times.

let n = 5;
let arr = [3, 1, 4];
let dp = new Array(n + 1).fill(0);
dp[0] = 1;
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] <= i) {
            dp[i] = dp[i] + dp[i - arr[j]];
        }
    }
}
console.log(dp[n]);